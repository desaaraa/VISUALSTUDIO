function cambiarColorParrafo() {
    
    let parrafo = document.getElementById("parrafo");
    parrafo.style.color = "blue"

    /*o tambien : document.getElementById("parrafo").style.color = "blue"*/
    
    }

    function mostrarTexto() {
        let texto = document.getElementById("nombre").value; // Obtener el valor del input
        document.getElementById("resultado").innerText = texto; // Mostrar el texto en el <p>
    }