document.addEventListener('DOMContentLoaded', function() {
    // Manejar el formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Validación simple
            if (!username || !password) {
                showError('Por favor completa todos los campos');
                return;
            }
            
            // Guardar en archivo (simulación)
            const logData = `Intento de login - Usuario: ${username}, Fecha: ${new Date().toLocaleString()}\n`;
            saveToFile('login_log.txt', logData);
            
            // Redirección simulada
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
    
    // Manejar el formulario de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Validación
            if (!fullname || !email || !username || !password) {
                showError('Por favor completa todos los campos');
                return;
            }
            
            if (!validateEmail(email)) {
                showError('Por favor ingresa un email válido');
                return;
            }
            
            if (password.length < 6) {
                showError('La contraseña debe tener al menos 6 caracteres');
                return;
            }
            
            // Guardar en archivo (simulación)
            const userData = `Nuevo usuario - Nombre: ${fullname}, Email: ${email}, Usuario: ${username}, Fecha: ${new Date().toLocaleString()}\n`;
            saveToFile('users_log.txt', userData);
            
            // Mostrar éxito y redirigir
            alert('¡Registro exitoso! Serás redirigido al login');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        });
    }
    
    // Funciones auxiliares
    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        
        // Limpiar errores anteriores
        const oldErrors = document.querySelectorAll('.error-message');
        oldErrors.forEach(error => error.remove());
        
        // Insertar nuevo error
        const form = document.querySelector('form');
        form.insertBefore(errorDiv, form.firstChild);
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function saveToFile(filename, data) {
        // En un entorno real, esto se enviaría a un servidor
        console.log(`Guardando en ${filename}:`, data);
        
        // Simulación de guardado en archivo
        if (typeof window.showSaveFilePicker !== 'undefined') {
            // API moderna (solo en algunos navegadores)
            window.showSaveFilePicker({
                suggestedName: filename,
                types: [{
                    description: 'Text Files',
                    accept: {'text/plain': ['.txt']}
                }]
            }).then(fileHandle => {
                return fileHandle.createWritable();
            }).then(writable => {
                writable.write(data);
                writable.close();
            }).catch(err => {
                console.error('Error al guardar:', err);
            });
        } else {
            // Fallback para navegadores que no soportan la API
            const blob = new Blob([data], {type: 'text/plain'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();
            URL.revokeObjectURL(url);
        }
    }
});