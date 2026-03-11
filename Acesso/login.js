// ========== LOGIN SYSTEM CONFIG ==========
const LOGIN_CONFIG = {
    // Usuários válidos (em produção seria um backend)
    users: [
        {
            id: 1,
            cnpj: '00.000.000/0001-91',
            password: 'senha123',
            companyName: 'Empresa Teste 01',
            role: 'admin'
        },
        {
            id: 2,
            cnpj: '11.222.333/0001-44',
            password: 'senha456',
            companyName: 'Empresa Teste 02',
            role: 'user'
        },
        {
            id: 3,
            cnpj: '55.666.777/0001-88',
            password: 'senha789',
            companyName: 'Empresa Teste 03',
            role: 'client'
        },
        {
            id: 4,
            cnpj: '57.650.364/0001-34',
            password: '576503',
            companyName: 'LP Agencia de Marketing',
            role: 'admin'
        }
    ],
    sessionTimeout: 3600000, // 1 hora em ms
    storageKey: 'lpagencia_session',
    rememberMeKey: 'lpagencia_remember'
};

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const usernameInput = document.getElementById('username');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', togglePasswordVisibility);
    }
    
    // Format CNPJ while typing in username field and block extra characters
    if (usernameInput) {
        // max 18 characters including punctuation (14 digits + . / -)
        usernameInput.setAttribute('maxlength', '18');
        usernameInput.addEventListener('input', function() {
            formatCNPJInput(this);
        });
    }
    
    // Don't check session on login page - allow user to login
    // checkExistingSession();
    
    // Check remember me
    loadRememberedUsername();
});

// ========== TOGGLE PASSWORD VISIBILITY ==========
function togglePasswordVisibility(e) {
    e.preventDefault();
    const passwordInput = document.getElementById('password');
    const toggleBtn = e.currentTarget;
    const icon = toggleBtn.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// ========== VALIDATE CNPJ ==========
function validateCNPJ(cnpj) {
    // Remove caracteres especiais
    const cleanCNPJ = cnpj.replace(/[^\d]/g, '');
    
    // Verifica se tem 14 dígitos
    if (cleanCNPJ.length !== 14) {
        return false;
    }
    
    // Formata para XX.XXX.XXX/XXXX-XX
    const formattedCNPJ = cleanCNPJ.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    return formattedCNPJ;
}

// ========== FORMAT CNPJ WHILE TYPING ==========
function formatCNPJInput(input) {
    // Remove tudo que não é número
    let value = input.value.replace(/[^\d]/g, '');
    
    // Limita a 14 dígitos e retorna rapidamente se atingiu o máximo
    if (value.length > 14) {
        value = value.slice(0, 14);
    }
    
    // Formata conforme o usuário digita: XX.XXX.XXX/XXXX-XX
    if (value.length <= 2) {
        input.value = value;
    } else if (value.length <= 5) {
        input.value = value.slice(0, 2) + '.' + value.slice(2);
    } else if (value.length <= 8) {
        input.value = value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5);
    } else if (value.length <= 12) {
        input.value = value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5, 8) + '/' + value.slice(8);
    } else {
        input.value = value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5, 8) + '/' + value.slice(8, 12) + '-' + value.slice(12);
    }
}

// ========== CLEAR ERROR MESSAGES ==========
function clearErrors() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    const errorBox = document.getElementById('errorBox');
    errorBox.classList.remove('show', 'shake');
    errorBox.textContent = '';
}

// ========== VALIDATE PASSWORD ==========
function validatePassword(password) {
    return password.length >= 6;
}

// ========== SHOW ERROR MESSAGE ==========
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// ========== SHOW ERROR BOX ==========
function showErrorBox(message) {
    const errorBox = document.getElementById('errorBox');
    errorBox.textContent = message;
    errorBox.classList.add('show', 'shake');
    
    // Remove shake animation after completion
    setTimeout(() => {
        errorBox.classList.remove('shake');
    }, 500);
}

// ========== HANDLE LOGIN ==========
function handleLogin(e) {
    e.preventDefault();
    clearErrors();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const loginBtn = e.target.querySelector('.login-btn');
    
    // Validation
    let isValid = true;
    
    if (!username) {
        showError('username', 'Usuário (CNPJ) é obrigatório');
        isValid = false;
    } else if (!validateCNPJ(username)) {
        showError('username', 'CNPJ inválido (formato: 00.000.000/0000-00)');
        isValid = false;
    }
    
    if (!password) {
        showError('password', 'Senha é obrigatória');
        isValid = false;
    } else if (!validatePassword(password)) {
        showError('password', 'Senha deve ter no mínimo 6 caracteres');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Simulate API call
    loginBtn.classList.add('loading');
    loginBtn.innerHTML = '<i class="fas fa-spinner"></i>';
    
    setTimeout(() => {
        const cleanCNPJ = username.replace(/[^\d]/g, '');
        const user = LOGIN_CONFIG.users.find(u => 
            u.cnpj.replace(/[^\d]/g, '') === cleanCNPJ && 
            u.password === password
        );
        
        if (user) {
            // Login successful
            createSession(user, rememberMe, username);
            showLoginSuccess();
            
            // Redirect after short delay
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 1500);
        } else {
            // Login failed
            loginBtn.classList.remove('loading');
            loginBtn.innerHTML = '<span>Entrar</span><i class="fas fa-arrow-right"></i>';
            showErrorBox('❌ Usuário (CNPJ) ou senha incorretos');
        }
    }, 1200); // Simulate network delay
}

// ========== CREATE SESSION ==========
function createSession(user, rememberMe, cnpj) {
    const sessionData = {
        userId: user.id,
        cnpj: cnpj,
        companyName: user.companyName,
        role: user.role,
        loginTime: new Date().getTime(),
        expiryTime: new Date().getTime() + LOGIN_CONFIG.sessionTimeout
    };
    
    // Store in localStorage
    localStorage.setItem(LOGIN_CONFIG.storageKey, JSON.stringify(sessionData));
    
    // Remember CNPJ if checked
    if (rememberMe) {
        localStorage.setItem(LOGIN_CONFIG.rememberMeKey, cnpj);
    } else {
        localStorage.removeItem(LOGIN_CONFIG.rememberMeKey);
    }
    
    // Set session timeout
    setSessionTimeout();
}

// ========== CHECK EXISTING SESSION ==========
function checkExistingSession() {
    const sessionData = localStorage.getItem(LOGIN_CONFIG.storageKey);
    
    if (sessionData) {
        const session = JSON.parse(sessionData);
        const now = new Date().getTime();
        
        // Check if session is still valid
        if (now < session.expiryTime) {
            // Session is valid, redirect to home page
            window.location.href = '../index.html';
        } else {
            // Session expired, clear it
            logout();
        }
    }
}

// ========== LOAD REMEMBERED USERNAME ==========
function loadRememberedUsername() {
    const rememberedUsername = localStorage.getItem(LOGIN_CONFIG.rememberMeKey);
    if (rememberedUsername) {
        document.getElementById('username').value = rememberedUsername;
        document.getElementById('rememberMe').checked = true;
    }
}

// ========== SET SESSION TIMEOUT ==========
function setSessionTimeout() {
    // Clear any existing timeout
    if (window.sessionTimeout) {
        clearTimeout(window.sessionTimeout);
    }
    
    // Set new timeout
    window.sessionTimeout = setTimeout(() => {
        logout('Sua sessão expirou. Por favor, faça login novamente.');
    }, LOGIN_CONFIG.sessionTimeout);
}

// ========== SHOW LOGIN SUCCESS ==========
function showLoginSuccess() {
    const loginForm = document.getElementById('loginForm');
    const successBox = document.createElement('div');
    successBox.className = 'success-box show';
    successBox.innerHTML = '✓ Login realizado com sucesso! Redirecionando...';
    
    loginForm.insertBefore(successBox, loginForm.firstChild);
}

// ========== LOGOUT ==========
function logout(message = null) {
    localStorage.removeItem(LOGIN_CONFIG.storageKey);
    localStorage.removeItem(LOGIN_CONFIG.rememberMeKey);
    
    if (window.sessionTimeout) {
        clearTimeout(window.sessionTimeout);
    }
    
    if (message) {
        alert(message);
    }
    
    window.location.href = 'login.html';
}

// ========== GET CURRENT USER ==========
function getCurrentUser() {
    const sessionData = localStorage.getItem(LOGIN_CONFIG.storageKey);
    
    if (!sessionData) {
        return null;
    }
    
    const session = JSON.parse(sessionData);
    const now = new Date().getTime();
    
    // Check if session is valid
    if (now > session.expiryTime) {
        logout();
        return null;
    }
    
    // Extend session timeout
    setSessionTimeout();
    
    return session;
}

// ========== IS USER LOGGED IN ==========
function isUserLoggedIn() {
    return getCurrentUser() !== null;
}

// ========== CHECK USER PERMISSION ==========
function hasPermission(requiredRole) {
    const user = getCurrentUser();
    
    if (!user) {
        return false;
    }
    
    const roleHierarchy = {
        'admin': 3,
        'user': 2,
        'client': 1
    };
    
    return roleHierarchy[user.role] >= roleHierarchy[requiredRole];
}

// ========== REDIRECT IF NOT LOGGED IN ==========
function requireLogin() {
    if (!isUserLoggedIn()) {
        window.location.href = 'login.html?redirect=' + window.location.pathname;
    }
}



// ========== EXTEND SESSION ==========
function extendSession() {
    const sessionData = localStorage.getItem(LOGIN_CONFIG.storageKey);
    
    if (sessionData) {
        const session = JSON.parse(sessionData);
        session.expiryTime = new Date().getTime() + LOGIN_CONFIG.sessionTimeout;
        localStorage.setItem(LOGIN_CONFIG.storageKey, JSON.stringify(session));
        setSessionTimeout();
    }
}

// ========== ACTIVITY LISTENER ==========
document.addEventListener('mousemove', debounce(extendSession, 60000)); // Extend every 1 min
document.addEventListener('keypress', debounce(extendSession, 60000));
document.addEventListener('click', debounce(extendSession, 60000));

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}