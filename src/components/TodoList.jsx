import React, {useState} from 'react';
import BoxList from './BoxList';
import NewTodo from './NewTodo';
import Header from './Header';



const TodoList = () => {

    const [tasks, guardarTasks] = useState([]);
    
    const guardarTraerDatos = task => {
        guardarTasks([...tasks, task]);
    }

    const traerTask = (task, opcion) => {
            if(opcion === 'eliminar'){
                eliminar(task.id);
            }else{
                editar(task.id, task);
            }
    }
    const eliminar = id => {
        const nuevoArray = tasks.filter( task =>  task.id !== id);
        guardarTasks(nuevoArray);
    }

    
    const editar = (id, newTask) => {
        const newArray = tasks.map(task => {

            if(task.id === id){
               task.task = newTask.task;
               return task;
            }else{
                return task;
            }
            
        })
        guardarTasks(newArray);
    }
    return (  
        <div className="bg-red-500  max-w-xl mx-auto text-center ">
           <Header/>
            <BoxList
                tasks={tasks}
                traerTask={traerTask}
            />
            <NewTodo
                guardarTraerDatos={guardarTraerDatos}
            />
        </div>
    );
}
 
export default TodoList;