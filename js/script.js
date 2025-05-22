// Функция для отображения выбранной страницы
function showPage(pageId) {
    // Скрываем все страницы
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Показываем выбранную страницу
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
    
    // Прокручиваем к началу страницы
    window.scrollTo(0, 0);
}

// Функции для модальных окон
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
    if (document.getElementById('registerModal').style.display === 'block') {
        document.getElementById('registerModal').style.display = 'none';
    }
}

function showRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
    if (document.getElementById('loginModal').style.display === 'block') {
        document.getElementById('loginModal').style.display = 'none';
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Обработка события загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Закрытие модального окна при клике вне его области
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
    
    // Обработка хэша в URL при загрузке страницы
    const hash = window.location.hash;
    if (hash) {
        const pageId = hash.substring(1) + '-page';
        showPage(pageId);
    }
    
    // Добавляем обработчики для форм входа и регистрации
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Функция входа будет реализована в будущем.');
        closeModal('loginModal');
    });
    
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Функция регистрации будет реализована в будущем.');
        closeModal('registerModal');
    });
}); 