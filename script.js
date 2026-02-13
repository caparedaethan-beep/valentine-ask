const valentines = document.querySelector('.valentines');
const heartArrow = document.getElementById('movingArrow');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Force the page to scroll to the top on every refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 10);
};

// Envelope Click Logic
valentines.addEventListener('click', () => {
    valentines.classList.toggle('open-scroll');
    
    if (valentines.classList.contains('open-scroll')) {
        document.body.style.overflowY = 'auto';
        heartArrow.classList.add('active'); 
    } else {
        document.body.style.overflowY = 'hidden';
        heartArrow.classList.remove('active'); 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// --- NEW BUTTON LOGIC ---

// 1. Yes Button Redirect
yesBtn.addEventListener('click', () => {
    // CHANGE THIS URL to your desired page!
    window.location.href = "cat_dance.gif"; 
});

// 2. No Button Dodge Logic
const dodgeButton = () => {
    const min = 150;
    const max = 250;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
};

// Dodge on hover (Desktop)
noBtn.addEventListener('mouseover', dodgeButton);

// Dodge on touch (Mobile)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents clicking the button on touch
    dodgeButton();
});

// Final safety: if they somehow click it
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dodgeButton();
});
