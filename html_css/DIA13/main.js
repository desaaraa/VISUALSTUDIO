//IF ELSE

let numero = 17;

if (numero % 2==0) {

console.log("El numero es par");

} else {

console.log("El numero no es par");

}

//SWITCH

let mes = 3;
switch (mes) {
case 1: console.log("ENERO"); break;
case 2: console.log("FEBRERO"); break;
case 3: console.log("MARZO"); break;
case 4: console.log("ABRIL"); break;
case 5: console.log("MAYO"); break;
case 6: console.log("JUNIO"); break;
case 7: console.log("JULIO"); break;
case 8: console.log("AGOSTO"); break;
case 9: console.log("SEPTIEMBRE"); break;
case 10: console.log("OCTUBRE"); break;
case 11: console.log("NOVIEMBRE"); break;
case 12: console.log("DICIEMBRE"); break;

default: console.log("PON UN MES DEL 1-12");
}

//FOR

for (let i = 10; i <= 1; i++) {

    console.log("Número: " + i);
    
    }

//WHILE

let contador = 50;

while (contador <= 1000) {

console.log("Contador: " + contador);

contador= contador*2;

}