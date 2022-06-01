let nombre="henrry   hola esto es bueno";
let nombre2="          henrry   hola esto es bueno";
let nombre3="hola ";
let nombre4="henrry";
let apellido="cordovillo";
let edad=20;

console.log(nombre.length);
let nombreMayus=nombre.toUpperCase();
console.log(nombreMayus);
console.log(nombreMayus.toLowerCase());

console.log(nombre.indexOf("n"));
console.log(nombre.indexOf("ry"));
console.log(nombre.replace("n","p"));
console.log(nombre.substring(1));
console.log(nombre.substring(4,6));
console.log(nombre.substring(4,5+1));
console.log(nombre.slice(0,-2));
console.log(nombre2.trim());
console.log(nombre.startsWith("h",9));
console.log(nombre.startsWith("H"));
console.log(nombre.endsWith("o"));
console.log(nombre.endsWith("n",26));
console.log(nombre.includes("r"));
console.log(nombre.includes("r",6));
console.log(nombre.includes("r",2));
console.log(nombre3.repeat(3));
console.log("p ".repeat(10));
console.log("p ".repeat(10));
console.log("Hola "+nombre4+" "+apellido+" tienes "+edad+" años ");
console.log(`Hola ${nombre4.toUpperCase()} ${apellido.toUpperCase()} el año que biene tendras ${edad+1} años.`);







