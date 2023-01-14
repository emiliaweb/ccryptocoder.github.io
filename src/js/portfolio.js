window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('[data-tab]');
    const switches = document.querySelectorAll('[data-switch]');

    const resetAll = () => {
        tabs.forEach(item => {
            item.classList.add('hidden');
        });
        switches.forEach(item => {
            item.classList.remove('portfolio__btn_active');
        });
    }

    switches.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            resetAll();
            item.classList.add('portfolio__btn_active');
            tabs[i].classList.remove('hidden');
        })
    })
})