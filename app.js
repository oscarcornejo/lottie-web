var lottie = document.getElementById('lottie');
var lottieAnimation = bodymovin.loadAnimation({
    container: lottie, // ID del div
    // path: 'https://assets.lottiefiles.com/datafiles/WLZxDkEn1AQcp9K/data.json', // Ruta del fichero .json de la animación
    // path: 'https://assets.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json',
    // path: 'https://assets.lottiefiles.com/datafiles/d9bc9kYC2VttaKb/data.json',
    path: 'https://assets.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json',
    // path: 'https://assets.lottiefiles.com/datafiles/8NT9e4buILljXNA/data.json',
    // path: 'https://assets.lottiefiles.com/datafiles/N42PEPaC4Dxw2Ni/data.json',
    // path: 'https://assets.lottiefiles.com/datafiles/BryLwD6OpeQIg9d/data.json',
    // path: 'https://assets.lottiefiles.com/datafiles/uihIaQIvWBfYL9a/data.json',
    // path: 'https://assets.lottiefiles.com/datafiles/KZAksH53JBd6PNu/data.json',
    // path: 'https://assets.lottiefiles.com/datafiles/4bjS1QdE0aEAfRC/data.json',
    // path: 'https://assets.lottiefiles.com/datafiles/d9bc9kYC2VttaKb/data.json',
    // path: 'https://assets.lottiefiles.com/datafiles/2FT0U0uuYcgZv3f/data.json',
    // path: 'https://assets.lottiefiles.com/datafiles/afw92jL6nC0SZCb/data.json',
    // path: 'https://assets.lottiefiles.com/datafiles/wFjFleaESNWBzrV/data.json',
    renderer: 'svg', // Requerido
    loop: true, // Opcional
    autoplay: true, // Opcional
    name: "Hello World", // Opcional
});

lottie.addEventListener('click', function() {
    lottieAnimation.playSegments([0, 100], true);
});

// OTRAS FUNCIONES

// lottie.addEventListener('click', function() {
//     lottieAnimation.play();
// });

// lottie.addEventListener('mouseenter', function() {
//     lottieAnimation.play();
// });

// lottie.addEventListener('mouseleave', function() {
//     lottieAnimation.pause();
// });

// lottie.addEventListener('mouseleave', function() {
//     lottieAnimation.stop();
// });