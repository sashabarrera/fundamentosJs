console.log("Conexion exitosa js...");

// 🎯 Objetivo de aprendizaje
// Aplicar el uso de datos numéricos en JavaScript, integrando:
// Declaración de variables
// Operaciones matemáticas
// Incremento y decremento
// Números decimales
// Notación científica
// Operaciones combinadas
// Redondeo
// Comparaciones
// Uso puntual de números aleatorios

// 📝 Instrucciones generales
// Crea un archivo llamado: script.js
// Resuelve cada ejercicio utilizando variables, operaciones y console.log()
// Todos los resultados deben mostrarse en consola con mensajes claros
// Usa nombres de variables significativos
// Comenta tu código cuando sea necesario

// 📌 Ejercicios
// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en alert.

function edadProyectada(){
    let edad = 16;
    alert(`Mi edad es: ${edad}
        \nEn 5 años tendré: ${edad + 5}
        \nHace 10 años tenia:${edad - 10}`);
};

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function compraDescuento(){
    let precioProducto = 25000;
    let total = precioProducto - (precioProducto * 20);
    alert(`El precio final del producto es con descuento:` + total);
}

// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas(){
let nota1 = 5.4;
let nota2 = 6.2;
let nota = 6.6;
alert(`Se tiebe 3 notas ${nota1}, ${nota2}, ${nota3}
    \nEl promedio de estas es: ${(nota1 + nota2 + nota3) /3}
    y redondeado serla ${Math.round((nota1 + nota2 +  nota3)/3)}`)

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function calcularTemperatura(){
let temperatura = 15;
let aumentada = temperatura + 3;
let disminuida = temperatura - 5;
let resultado = temperatura + 3 -5;
alert(`La temperartura actual es: ${temperatura}
    \nLa temperatura aumentada es: ${aumentada}
    \nLa temperatura disminuida es: ${disminuida}
    \nEl resultado de la temperatura es:${resultado}`)
}

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function calcularSueldo(){
let valorHora = 8000;
let cantidadHora = 45;
let sueldo = valorHora * cantidadHora;
cantidadHora += 5;
let sueldoNuevo = valorHora * cantidadHora;
alert(`sueldo actual: $${sueldo}
    \nSueldo nuevo con incremento: $${sueldoNuevo}`)
}

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola
function calculaDivision(){
    let num1 = 6;
    let num2 = 4;
    alert(`Num1: ${num1 / num2}
    \n el num1 es igual `)
}

// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10


// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado


// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final

// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)
