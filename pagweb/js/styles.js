document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.querySelector('.close-modal');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    
    // Menu toggle para móviles
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
    
    // Abrir modal de login
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'flex';
    });
    
    // Cerrar modal
    closeModal.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
    
    // Cambiar entre tabs de login/registro
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover active de todos los botones y forms
            tabBtns.forEach(b => b.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            
            // Agregar active al botón clickeado
            this.classList.add('active');
            
            // Mostrar el form correspondiente
            const tab = this.dataset.tab;
            document.getElementById(`${tab}-form`).classList.add('active');
        });
    });
    
    // Manejar envío de formularios
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Inicio de sesión exitoso (simulado)');
        loginModal.style.display = 'none';
    });
    
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Registro exitoso (simulado)');
        // Cambiar a pestaña de login
        document.querySelector('.tab-btn[data-tab="login"]').click();
    });
    
    // Simular búsqueda de productos
    document.querySelector('.search-box button').addEventListener('click', function(e) {
        e.preventDefault();
        const searchTerm = document.querySelector('.search-box input').value;
        alert(`Buscando: ${searchTerm} (simulado)`);
    });
    
    // Simular filtro de categorías
    document.querySelector('.category-filter').addEventListener('change', function() {
        const category = this.value;
        alert(`Filtrando por categoría: ${category} (simulado)`);
    });
    
    // Botones de compra
    document.querySelectorAll('.btn-buy').forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            alert(`Agregado al carrito: ${productName} (simulado)`);
        });
    });
});