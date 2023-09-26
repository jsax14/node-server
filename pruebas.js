var readline = require('readline-sync');
let arr = [];
let bandera = false

do{
n  = readline.question('ingrese un numero: \n');
arr.push(n);
console.log(arr)
if(n == 0){
bandera = true;
}
}while(bandera===false);