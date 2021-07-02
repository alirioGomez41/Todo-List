import React, {useState} from 'react';
import shortid from 'shortid';

const NewTodo = ({guardarTraerDatos}) => {


    const [todotask, guardarTodoTask] = useState({
        task:'',
        id:''
    });
    const [error, guardarError] = useState(false);
    const {task} = todotask;

    const handleChange = e => {
        guardarTodoTask({ [e.target.name]:e.target.value});
     }

     const enviarDatos = e => {
         e.preventDefault();

         if(task.trim() === ''){
             guardarError(true);

             return;
         }
         todotask.id = shortid.generate();
     
         guardarTraerDatos(todotask); 
         guardarTodoTask({
            task:'',
            id:''
         });
     }
    return (  
        <form 
            onSubmit={enviarDatos}
            className="py-8"
        >
            <h3 className="text-white text-xl text-left ml-12">New Todo</h3>
           <div className="text-left ml-12">
                <input 
                    type="text" 
                    placeholder="NewTodo"
                    className="p-2 text-xs text-black"
                    name="task"
                    value={task}
                    onChange={handleChange}
                />
                <button
                    className=" text-xs text-white ml-2 p-2 uppercase border border-white hover:bg-red-300"
                >Add Todo</button>
           </div>
           {error? <p className="bg-white text-red-500 m-2 w-10/12 text-center p-2 text-xl text-left ml-12">Enter a task</p>: null}
        </form>
    );
}
 
export default NewTodo;