const buscador = document.getElementById("buscador");
const elTexto = document.getElementById("elTexto");

const google = 'https://www.google.com/search?q=';

function buscar(){
    const url = google + elTexto.value;
    const win = window.open(url, '_blank');
    win.focus();
}

buscador.addEventListener("click",buscar);

// Execute a function when the user presses a key on the keyboard
elTexto.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      buscar();
    }
  });