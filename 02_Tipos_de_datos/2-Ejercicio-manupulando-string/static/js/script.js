console.log("Conexion corrercta con js...");


// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
let nombre ="Camila";
let edad ="25";
console.log(`Su nombre es: ${nombre} y su edad es ${edad}
\nTipo de dato (edad) es: ${typeof edad} `);

// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas
let comuna = "Maipú"; 
let region = "Metropolitana";
console.log(`La persona vive en la comuna ${comuna.toUpperCase()}
y la region de ${region.toLocaleLowerCase()}.`);


// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje = "Python";
console.log(`La palabra ${lenguaje.toUpperCase()} tiene ${lenguaje.length} caracteres. 
\n su tipo de dato es: {typeof lenguaje}`);


// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas

let mensaje = "Me gusta programar en JavaScript";
console.log(`Mensaje inicial: "${mensaje}"
\nMensaje en minusculas: "${mensaje.toLocaleLowerCase()}".
\nBuscando palabras Javascript dentro: ${mensaje.includes("Javascript")}
\nCantidad de caracteres en mensaje: ${mensaje.length}.`);

// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
let compras ="arroz, fideos, aceite, sal" 
console.log(`mensaje inicial ${mensaje.includes("aceite")}
\nMensaje en Mayuscula: ${compras.toUpperCase()}
\nCantidad de caracteres en mensaje: ${mensaje.length}.`);


// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
let numeroCasa = "456";
let numeroCasaTexto= String(numeroCasa);
console.log(`Mi numero de casa ${numeroCasaTexto} es de tipo: ${typeof numerotoCasaTexto} tiene
    ${numeroCasaTexto.length} letras`);


// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
let name ="Diego";
let lastname ="Rojas";
let nombreCompleto = `${name} ${lastname}`
console.log(`El nombre es: ${name} y el apellido es: ${lastname}
\n el nombre completo tiene: ${nombreCompleto.length} caracteres`);
// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase = "Hoy aprenderemos sobre strings"
console.log(`La frase ${frase} contiene la palabra "strings":
    ${frase.includes("strings")}`);
    console.log(`${frase.toUpperCase()} - tiene ${frase.length} caracteres `);
// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto ="Programar es divertido";
console.log(`Texto original${texto}
\nTexto en minuscula: ${texto.toLocaleLowerCase()}
\n Texto en mayuscula: ${texto.toLocaleUpperCase()}
\n texto tiene: ${texto.length} carateres`);

// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 3C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso = "3C";
let anio = "2026";
let anioTexto = String(anio); //anio a texto
console.log(`Curso ${curso} del año ${anioTexto} 
\nAño es de tipo: ${typeof anioTexto} `.toUpperCase());