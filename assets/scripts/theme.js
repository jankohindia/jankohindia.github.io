function updateTheme() {
    const hour = new Date().getHours();
    const isDayTime = hour >= 6 && hour < 19;

    document.documentElement.classList.toggle('night', isDayTime);
    document.documentElement.classList.toggle('day', !isDayTime);
}

updateTheme();
setInterval(updateTheme, 60000);

function preloadImages() {
    const images = [
        'assets/images/logo-dark.png',
        'assets/images/logo-light.png'
    ];

    images.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
}

preloadImages();
