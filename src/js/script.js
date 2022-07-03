window.addEventListener('DOMContentLoaded', () => {
    const ratingNums = Array.from(document.querySelectorAll('.rating__item-num'));    
    const ratingProgress = Array.from(document.querySelectorAll('.rating__item-progress'));   
    
    ratingProgress.forEach((item, i) => {
        item.style.width = ratingNums[i].innerText;
    });

    const header = document.querySelector('.header');
})