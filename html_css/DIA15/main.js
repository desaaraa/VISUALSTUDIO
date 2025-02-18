function suma(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = "Resultado: " + (n1 + n2);

}

function resta(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = "Resultado: " + (n1 - n2);
}

function multiplicacion(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = "Resultado: " + (n1 * n2);
}

function division(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = "Resultado: " + (n1 / n2);
}