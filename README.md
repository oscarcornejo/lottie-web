# lottie-web
Implementación de Lottie para web

## Setup HTML

```
<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lottie Web - Demo Ejemplo</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <div class="displayFlexCenter">
        <div id="lottie"></div>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.4.2/lottie.min.js" type="text/javascript"></script>
    <script src="app.js"></script>
</body>

</html>

```

## Setup JS

```
var lottie = document.getElementById('lottie'); // Id del div
var lottieAnimation = bodymovin.loadAnimation({
    container: lottie, // Id del elemento
    path: 'https://assets.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json', // Ruta del archivo (Ej: data.json)
    renderer: 'svg', // Requerido
    loop: true, // Opcional
    autoplay: true, // Opcional
    name: "Hello World", // Opcional
});

// FUNCIÓN PARA ARRANCAR LA ANIMACIÓN AL CLICK

lottie.addEventListener('click', function() {
    lottieAnimation.playSegments([0, 100], true);
});

```

## Créditos

airbnb.io/lottie/

## Recursos

Animaciones: www.lottiefiles.com
Getting Started: airbnb.io/lottie/web/web.html

