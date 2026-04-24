console.log("Conexion exitosa con JS...");

/*
============================
1.¿Que una condicion en JS?
============================
Una condicion que nos permite tomar decisiones en el 
codigo.Separando dos caminos el si(if) y el no(else).
Estructura basica:(Sintaxis --> Reglas del lenguaje de programacion)
if(condicion){
//codigo que se ejecuta si la condicion es verdadera.
} else{
    //codiogo que se ejecuta si la condicion es falsa
    }
*/

//Ejemplo 1: (numerico) -- IF
let edad = 18;

if(edad >= 18){//Condicion Si 
    console.log("Eres mayor de edad");
}

//Ejemplo 2: Dos caminos posibles
let temperatura = 10;

if(temperatura > 20 ){ //Condicion SI
    console.log("Hace calor");
} else{ // Condicion NO
    console.log("Hace frio")
}

//Ejemplo 3:IF- ELSE IF - ELSE (Multiples condiciones)

let nota = 3.5;

if(nota >= 6.0){ //Primera condicion
    console.log("Execelnte!");
}else if (nota >= 4.0){ //Segunda condicion
    console.log("Aprobado");
}else{ //Valor si no cumple anteriores
    console.log("Reprobado, estudia mas!")
}

//Ejmplo 4: Condiciones con STRING
let nombre = "Sasha";

//Comparacion exacta (===)
if (nombre === "Sasha"){
    console.log("Hola " + nombre)
}else{
    console.log("Tu no eres Sasha")
}

/*
OPERADORES DE COMPARACION
>Mayor que
< Menos que
>= Mayor o igual
<= Menos o igual
=== Estricta igualdad
!== Distinto
*/ 

//Ejemplo de distinto
let num = 10;
let num2 = 5;
if(num !== 5){
    console.log(`El numero: ${num} es distinto que ${num2}`)
}else{
    console.log("Son iguales")
}