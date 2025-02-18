
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página
    
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let email = document.getElementById("email").value;

    document.getElementById("resultado").innerHTML = 
        `<strong>Nombre:</strong> ${nombre} <br>
        <strong>Edad:</strong> ${edad} <br>
        <strong>Email:</strong> ${email}`;
});