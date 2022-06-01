
// for(let i=0;i<=3;i++){
//     console.log(i);
// }

// let numbers=[ 0,1,2,3,4,5,6,7]

// for(let i=0;i<=numbers.length;i++){
// console.log(` i vale ${i} y el valor de esa posicion en el array es ${numbers[i]}`);
// }

let names = ['Paco','Jose','Marian','Paula'];

for (let name of names) {
    console.log(name);
}

for (let index in names) {
    console.log(index);
}

for (let index in names) {
    console.log(names[index]);
}