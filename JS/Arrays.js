// let numeros = [1,2,3,4,5];
// let palabras = ["hola","estamos","en","youtube"];
// let booleans = [true,false,false];

// console.log(numeros);
// console.log(numeros[4]+1);
// console.log(`La palabra ${palabras[1]} tiene ${palabras[1].length} letras`);
// console.log(booleans[2]);


let numeros = [1,2,3,4,5,6,7];

console.log(numeros.length);

let numero = 2;
console.log(Array.isArray(numero));
console.log(Array.isArray(numeros));
console.log(numeros);
let  priemroEliminado= numeros.shift();
console.log(priemroEliminado);
console.log(numeros);
let ultimoEliminado = numeros.pop();
console.log(ultimoEliminado);
console.log(numeros);

numeros.push(7);
console.log(numeros);

numeros.unshift(1);
console.log(numeros);

numeros.push(1);
console.log(numeros);
console.log(numeros.indexOf(6));
console.log(numeros.lastIndexOf(1));

console.log(numeros);
console.log(numeros.reverse());
let arrayString = numeros.join("'");
console.log(arrayString);


console.log(numeros);

numeros.splice(3);

console.log(numeros);

numeros = [1,2,3,4,5,6,7];

console.log(numeros);

numeros.splice(3,2);

console.log(numeros);

numeros = [1,2,3,4,5,6,7];

console.log(numeros);

numeros.splice(3,2,"Hola",1,3,5,1,2,2);

console.log(numeros);

numeros = [1,2,3,4,5,6,7];

console.log(numeros);

numeros.splice(7,0,"Hola","adsa","asdasd");

console.log(numeros);


numeros = [1,2,3,4,5,6,7];
console.log(numeros);
let newnumeros = numeros.slice();
console.log(newnumeros);

numeros = [1,2,3,4,5,6,7];
console.log(numeros);
let newnumeros1 = numeros.slice(3);
console.log(newnumeros1);

numeros = [1,2,3,4,5,6,7];
console.log(numeros);
let newnumeros2 = numeros.slice(3,6);
console.log(newnumeros2);