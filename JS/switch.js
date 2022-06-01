let num = 10;

switch (num) {
    case 0: console.log("Num tiene el valor 0");
    break;
    case 1: console.log("Num tiene el valor 1");
    break;
    case 2: console.log("Num tiene el valor 2");
    break;
    case 3: console.log("Num tiene el valor 3");
    break;
    case 4: console.log("Num tiene el valor 4");
    break;
    default: console.log("Num  sobrepasa 4")
}

switch(num){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    console.log(`${num} es impar`);
    break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
    console.log(`${num} es par`);
    break;

}
