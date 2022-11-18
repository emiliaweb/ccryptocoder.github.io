window.addEventListener('DOMContentLoaded', () => {
    const ratingNums = Array.from(document.querySelectorAll('.rating__item-num'));    
    const ratingProgress = Array.from(document.querySelectorAll('.rating__item-progress'));   
    
    ratingProgress.forEach((item, i) => {
        item.style.width = ratingNums[i].getAttribute('data-percent');
    });

    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    if (window.innerWidth < 768) {
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;  
            if (scrollTop > lastScrollTop) {
                header.style.top = '-100%';
            }else if (window.pageYOffset == 0 || document.documentElement.scrollTop == 0) {
                header.style.top = '0';
            }else {
                header.style.top = '0';
            }
            lastScrollTop = scrollTop;
        });
    }

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100 || document.documentElement.scrollTop > 100) {
            header.classList.add('header_scrolled');
        } else if (window.pageYOffset == 0 || document.documentElement.scrollTop == 0) {
            header.classList.remove('header_scrolled');
        }
    });

    const headerHamburger = document.querySelector('[data-header-hamburger]');
    const headerNav = document.querySelector('[data-header-nav]');
    const headerItems = Array.from(document.querySelectorAll('[data-header-item]'));

    headerHamburger.addEventListener('click', () => {
        headerNav.classList.add('header__nav_active');
    });
    headerNav.addEventListener('click', (e) => {
        e.target.classList.remove('header__nav_active');
    });
    headerItems.forEach(item => {
        item.addEventListener('click', () => {
            headerNav.classList.remove('header__nav_active');
        });
    });
});