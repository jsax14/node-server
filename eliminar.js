const readline = require('readline-sync');
const listaTarea = require('./crear')

const mostrarLista = async() => {
    console.log(listaTarea.tareas,'\n');
    let tareaEliminar = readline.question('escriba la tarea que desea eliminar\n')
    

    

   
    for (let i = 0; i < listaTarea.tareas.length; i++) {
    
        if(tareaEliminar == listaTarea.tareas[i]){
            
           listaTarea.tareas.splice(i,1)
           console.log('Tarea: ', tareaEliminar, ' Fue eliminada')
        }
        
    }
  

}



module.exports = {
 mostrarLista
}