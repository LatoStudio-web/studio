const backgrounds = [
    'background1.jpg',
    'background2.jpg',
    'background3.mp4'
];

let currentIndex = 0;

function changeBackground() {
    const bg = document.getElementById('background');
    const nextBackground = backgrounds[currentIndex];

    if (nextBackground.endsWith('.mp4')) {
        bg.innerHTML = `<video src="${nextBackground}" autoplay muted loop></video><div class="overlay"></div>`;
    } else {
        bg.style.backgroundImage = `url(${nextBackground})`;
    }

    currentIndex = (currentIndex + 1) % backgrounds.length;
}

setInterval(changeBackground, 5000); // Cambia cada 5 segundos
changeBackground();
