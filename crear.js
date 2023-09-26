var readline = require('readline-sync');
const tareas = [];
let opt
const crearTarea = async() => {
    do{
        let descripcion = readline.question('Ingrese la tarea que desea agregar \n')  
        tareas.push(descripcion);
        console.log(tareas);
        console.clear();
        opt = readline.question('desea agragr otra tarea? y/n \n');
        console.clear();
        
    
    }while(opt === 'y' );
}

module.exports = {
    crearTarea,
    tareas
}
   

    



    