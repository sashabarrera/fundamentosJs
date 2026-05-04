console.log("Conexion exitosa....");

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nombre = "Juan";
    let nota = 6.5;
    if (nota > 6.0) {
        alert(`Excelente rendimiento`);
    } else if (nota > 4.0) {
        alert(`Estudiante aprobado`);
    } else {
        alert(`Estudiante reprobado`)
    }
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre1 = "Daniel Perez";
    alert(`El nombre convertido es: ${nombre1.toUpperCase()} tiene: ${nombre1.length} letras`)
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo = "ejemPlo@gmaiL.coM";
    let correoMinusc = correo.toLocaleLowerCase()
    if (correo.length >= 15) {
        alert(`El correo convertido es: ${correoMinusc} y el resultado es: correo válido ${correo.length} caracteres`);

    } else {
        alert(`El correo convertido es: ${correoMinusc} y resulado es: correo demasiado corto ${correo.length} caracteres`)
    }
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let frase = "Estoy aprendiendo JavaScritp";
    if (frase.length >= 20) {
        alert(`tiene ${frase.length} y es una frase larga `);
    } else if (frase.length >= 11) {
        alert(`tiene ${frase.length} y es frase mediana `);
    } else {
        alert(`tiene  ${frase.length} y es frase corta`)
    }
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let producto = "teclado";
    let precio = 5000;
    let descuento = 0.1;
    alert(`el producto ${producto.toLocaleUpperCase()} tiene un pecio final $${precio - (precio * descuento)}`);
}

//Ejercicio 16: Boleta de compra con clasificación de cliente

//Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
//Convertir el nombre del cliente a mayúsculas
//Determinar el tipo de cliente según el precio:
//Mayor o igual a 100.000 → Cliente Premium (20% descuento)
//Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
//Menor a 50.000 → Cliente Normal (sin descuento)

///Mostrar:
//Nombre del cliente en mayúsculas
//Producto en minúsculas
//Precio original
//Precio final
//Tipo de cliente

//Ejercicio 17: Análisis de frase con puntuación
//Crear una función que almacene una frase y un puntaje numérico. Luego:
//Convertir la frase a minúsculas
//Contar la cantidad de caracteres
//Clasificar el puntaje:
//90 o más → Excelente
//70 o más → Bueno
//Menor a 70 → Insuficiente
function Analizar() {

}
//Mostrar:
//Frase transformada
//Largo de la frase
//Puntaje
//Clasificación

//Ejercicio 18: Evaluación de tres notas con estado final

//Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

//Calcular el promedio
//Convertir el nombre a mayúsculas
//Determinar el estado:
//Promedio ≥ 6.0 → Destacado
//Promedio ≥ 4.0 → Aprobado
//Promedio < 4.0 → Reprobado
function calcularNotas() {
    let nombre = "papelucho";
    let n1 = 2.9;
    let n2 = 7.0;
    let n3 = 6.7;
    let promedio = (n1 + n2 + n3) / 3;
    let nombreMayuscula = nombre.toLocaleUpperCase();
    if (promedio >= 6.0) {
        alert(`El estudiante ${nombreMayuscula} esta Destacado.
        \nPromedio: ${promedio}.
        \nLargo nombre: ${nombre.length}`)
    } else if (promedio >= 4) {
        alert(`El estudiante ${nombreMayuscula} Esta aprobado.
        \nPromedio: ${promedio}.
        \nLargo nombre: ${nombre.length}`)
    } else {
        alert(`El estudiante ${nombreMayuscula} Esta reprobado.
        \nPromedio: ${promedio}.
        \nLargo nombre: ${nombre.length}`)
    }
}
//Además:
//Contar la cantidad de caracteres del nombre

//Mostrar:
//Nombre en mayúsculas
//Cantidad de caracteres del nombre
//Promedio
//Estado final


// Ejercicio 19: Clasificación de desempeño con más niveles
// Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

// Convertir el nombre a mayúsculas
// Clasificar el rendimiento según:
// ≥ 6.5 → Sobresaliente
// ≥ 6.0 → Muy buen rendimiento
// ≥ 5.0 → Buen rendimiento
// ≥ 4.0 → Suficiente
// < 4.0 → Insuficiente
function desempeño() {
    let nombre1 = "Juanita";
    let nota1 = 6.6;
    let nota2 = 6.1;
    let nota3 = 5.2;
    let nota4 = 4.0;
    let promedio1 = (nota1 + nota2 + nota3 + nota4) / 4;
    let nombre1Mayuscula = nombre1.toLocaleUpperCase();
    if (promedio1 >= 6.5){
        alert(`El estudiante ${nombre1Mayuscula} Sobresaliste.
        \nPromedio: ${promedio}.
        \nLargo nombre: ${nombre1.length}`)
    } else if(promedio1 >= 6.0){
        alert(`El estudiante ${nombre1Mayuscula} Muy buen rendimiento.
            \nPromedio: ${promedio1}.
            \nLargo nombre: ${nombre1.length}`)
    } else if(promedio1 >= 5.0){
        alert(`El estudiante ${nombre1Mayuscula} Buen rendimiento.
            \nPromedio: ${promedio1}.
            \nLargo nombre: ${nombre1.length}`)
    } else if(promedio1 >= 4.0){
        alert(`El estudiante ${nombre1Mayuscula} Suficiente.
            \nPromedio: ${promedio1}.
            \nLargo nombre: ${nombre1.length}`)
    } else{
        alert(`El estudiante ${nombre1Mayuscula} Insuficiente.
        \nPromedio: ${promedio1}.
        \nLargo nombre: ${nombre1.length}`)
    }
}
// Además:

// Mostrar la cantidad de caracteres del nombre

// Ejercicio 20: Clasificación de producto con múltiples rangos de precio
// Crear una función que almacene el nombre de un producto y su precio. Luego:

// Convertir el producto a minúsculas
// Clasificar el precio:
// ≥ 200.000 → Producto de lujo
// ≥ 100.000 → Producto premium
// ≥ 50.000 → Producto estándar
// ≥ 20.000 → Producto económico
// < 20.000 → Producto básico
function producto(){
    let producto="leche";
    let precio=200000;
    let precio1= 100000;
    let precio2=50000;
    let precio3= 21000;
    let precio4=1500;
    let productoMinuscula= producto.toLocaleLowerCase();
    if(precio){
        alert(`El producto ${productoMinuscula} Producto de lujo.
            \nPrecio: ${precio}.`)
    }else if(precio1 >= 0.85){
        alert(`El producto ${productoMinuscula} Producto premion.
            \nPrecio: ${precio1}.`)
    }else if(precio2 >= 0.1){
        alert(`El producto ${productoMinuscula} Producto estandar.
            \nPrecio: ${precio2}`)
    }
    }

// Además:

// Aplicar descuento:
// Si es ≥ 100.000 → 15%
// Si es ≥ 50.000 → 10%
// Si es menor → sin descuento

// Mostrar:

// Nombre transformado
// Largo del nombre del producto
// Precio original
// Precio final
// Clasificación

// Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
// Crear una función que almacene una frase y un puntaje. Luego:

// Convertir la frase a mayúsculas
// Contar su largo
// Clasificar el puntaje:
// ≥ 90 → Excelente
// ≥ 80 → Muy bueno
// ≥ 70 → Bueno
// ≥ 60 → Regular
// < 60 → Deficiente

// Además:

// Clasificar la frase por tamaño:

// 30 → Muy larga

// 20 → Larga

// 10 → Mediana

// ≤ 10 → Corta