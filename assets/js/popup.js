window.addEventListener("load", function () {
  let player; // Variable para almacenar la instancia del reproductor de Vimeo

  // No necesitas el setTimeout, puedes mostrar la ventana emergente inmediatamente si lo deseas
  document.querySelector("#open").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace realice su acción predeterminada

    // Agrega &autoplay=1 al src del iframe al abrir el popup
    const iframe = document.querySelector("iframe");
    const src = iframe.getAttribute("src");
    iframe.setAttribute("src", src + "&autoplay=1");

    // Inicializa el reproductor de Vimeo
    player = new Vimeo.Player(iframe);

    // Muestra el popup
    document.querySelector(".popup").style.display = "block";
  });

  document.querySelector("#close").addEventListener("click", function () {
    // Pausa y oculta el video antes de cerrar el popup
    if (player) {
      player.pause().then(function () {
        document.querySelector(".popup").style.display = "none";
      });
    }
  });
});
