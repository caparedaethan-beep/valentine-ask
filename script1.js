document.addEventListener('DOMContentLoaded', () => {
    const valentines = document.querySelector('.valentines');
    const modal = document.getElementById('invitationModal');
    const diaryPage = document.getElementById('diaryPage');
    const schedulePage = document.getElementById('schedulePage');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // 1. Open the Modal when the envelope is clicked
    valentines.addEventListener('click', () => {
        // Delay matches the envelope opening animation (0.5s)
        setTimeout(() => {
            modal.style.display = 'flex';
        }, 500); 
    });

    // 2. Transition from Invitation to Schedule when clicking "YES"
    if (yesBtn) {
        yesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide the letter, show the schedule
            diaryPage.style.display = 'none';
            schedulePage.style.display = 'block';
        });
    }

    // 3. Make the "No" button unresponsive/playful
    if (noBtn) {
        noBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Add a little shake effect (Optional CSS needed for 'shake' class)
            noBtn.style.transform = "translateX(10px)";
            setTimeout(() => noBtn.style.transform = "translateX(-10px)", 100);
            setTimeout(() => noBtn.style.transform = "translateX(0)", 200);
            
            alert("Oops! This button is currently under maintenance. Please try 'YES' instead! 😉");
        });
    }

    // 4. Close the modal if clicking outside the diary area
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            
            // Reset for the next time it's opened
            setTimeout(() => {
                diaryPage.style.display = 'block';
                schedulePage.style.display = 'none';
            }, 300);
        }
    });
});