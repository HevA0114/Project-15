// Add a popup functionality
document.getElementById('popup-button').addEventListener('click', function() {
    alert(
        "Pwede ka po bang sumama sakin sa monday after ng class po natin para sa coffee date po, kung oo chat nyo po sakin 'punta tayo sa forever dada' if hindi well oo lang ang choice hehehehe"
    );
});

// Add floating hearts
const container = document.querySelector('.heart-container');

for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(heart);
}
