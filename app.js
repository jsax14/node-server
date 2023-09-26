const readline = require('readline-sync');

const {crearTarea} = require('./crear');
const{mostrarLista} = require('./eliminar');
let opt  = ''
let bandera = true;
do{
   
 opt = readline.question('Que opcion desea??\n1.Crear \n2.Eliminar \n3.Completar\n0.Salir\n' );
 console.clear();

switch (opt) {
  case '0':
    bandera = false;
break;

    case '1':
            crearTarea();
        break;

    case '2':
        mostrarLista();
    break;
   
    default:
        break;

  }

}while(bandera === true );

