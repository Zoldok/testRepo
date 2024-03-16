let timeout;
const popUpTablet = document.querySelector('.pop-up__tablet');

popUpTablet.addEventListener('scroll', function() {
    clearTimeout(timeout);
    
    popUpTablet.style.scrollbarColor = 'initial';

    timeout = setTimeout(function() {
        popUpTablet.style.scrollbarColor = 'transparent transparent'; 
    }, 1500); 
});
