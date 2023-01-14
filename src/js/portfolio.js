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

    const items = tabs[0].querySelectorAll('.portfolio__item');
    const showMore = tabs[0].querySelector('.portfolio__more');

    const showAllItems = () => {
        items.forEach(item => {
            item.classList.remove('hidden');
        });
    }

    const hideItems = () => {
        items.forEach((item, i) => {
            if (i > 6) {
                item.classList.add('hidden');
            }
        });
    }

    hideItems();

    showMore.addEventListener('click', (e) => {
        e.preventDefault();
        if (showMore.textContent == 'Показать больше') {
            showAllItems();
            showMore.textContent = 'Скрыть';
        } else {
            hideItems();
            showMore.textContent = 'Показать больше';
        }
    })

})