const valentines = document.querySelector('.valentines');
const heartArrow = document.getElementById('movingArrow');


// Force the page to scroll to the top on every refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Backup: also scroll to top when the page finishes loading
window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 10);
};
valentines.addEventListener('click', () => {
    valentines.classList.toggle('open-scroll');
    
    if (valentines.classList.contains('open-scroll')) {
        document.body.style.overflowY = 'auto';
        heartArrow.classList.add('active'); // Start the arrow path
    } else {
        document.body.style.overflowY = 'hidden';
        heartArrow.classList.remove('active'); // Hide/Reset the arrow
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});


