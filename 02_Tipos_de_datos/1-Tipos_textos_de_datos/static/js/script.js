console.log("Conexion con js correcta...")
/*
Dato: Tipo texto(string)
1.- Concatenacion de texto con el signo + 
Podemos unir texto y variables
*/
//Concadenación: unir texto y/o variables.
const nombre = "Sasha";
const apellido = "Barrera";
//Unimos ambas constantes con un texto extra.
console.log("Hola, mi nombre es: " + nombre + "" + apellido);

/*
2- Ver el tipo de dato (typeof)
*/
console.log("La variable nombre es un tipo de dato; " + typeof nombre);

// Template literals (forma moderna para concatenar) ``
console.log(`Hola, mi nombre es ${nombre} ${apellido}`);

//Mostrar el largo de un string(texto) - contar los caracteres.
//.length --> Para cantar caracteres y espacios.
let palabra = "Paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} letras.`);

//Crear una frese y contar sus caracteres.
let frase = "Mañana hace calor";
console.log(`La frase ${frase} tiene ${frase.length} caracteres.`);

// Metodos comunes en JS para formatear texto
//Transformar texto en Mayúscalas .toUpperCase()
let texto1 = "JAVAsCript eS Lo Mejor";
console.log(texto1.toUpperCase());

//Trnsformar texto a minuscula .toLowerCase
console.log(texto1.toLowerCase());

//Buscar un texto dentro de un string
let texto2 = "Leche, azucar, peras, huevos, harina";
console.log(texto2.includes("peras")); // True}

//Convertir una variable a texto
let telefono = 89182920
let telefono_texto = String(telefono);
console.log(` Mi numero de telefono ${telefono_texto}
    es de tipo: ${typeof telefono_texto}`);