import React, {useState} from 'react';
const Box = ({task, traerTask}) => {

    const [editar, guardarEditar] = useState(false);
    const [newtask, guardarNewTask] = useState({
        id: '',
        task:''
    })
    const [terminartarea, guardarTerminarTarea] = useState(false);

    const eliminarTask = task => {
        traerTask(task, 'eliminar');
    }

    const saveNewTask = e => {
        guardarNewTask({
            ...task, 
            [e.target.name]: e.target.value
        })
    }
    const editarTask = () => {
        const {id, task} = newtask;
    
        if(task.trim() === ''){
            guardarNewTask({id: '', task:''});
            guardarEditar(false);
            return;
        }
        
        guardarEditar(false);
         traerTask(newtask, 'editar')
    }
    const terminarTarea = () => {
        if(terminartarea)
            guardarTerminarTarea(false);
        else
            guardarTerminarTarea(true);
    }


    return ( 
        <div className="h-full  mx-auto w-10/12 sm:w-full sm:h-20  bg-red-300   mb-1 flex items-center flex-col sm:flex-row sm:justify-between">
            <p  className={`${terminartarea? 'line-through': null} text-2xl sm:text-xl sm:ml-12 text-white break-all sm:break-normal p-4 sm:p-0 cursor-pointer `}>
                {editar? 
                    <input 
                        className="p-2 text-xs text-black" 
                        type="text"
                        name="task"
                        onChange={saveNewTask}
                        value={newtask.task}
                        /> 
                 : ( <span onClick={terminarTarea} >{task.task}</span>)}
            </p>
            <div className="sm:mr-12 text-right flex justify-around ">
                {
                  editar?
                      (

                        <button 
                            onClick={() => editarTask()}
                            type="submit"
                            className="sm:mr-2 sm:transform sm:hover:scale-150 sm:transition sm:duration-300 sm:ease-in-out m-1 sm:m-0"
                            
                        >
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
                                C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
                                L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                            </svg>              
                        </button>

                      )  
                      
                  :

                  (

                    <button 
                        onClick={() => {
                            guardarEditar(true);
                            guardarNewTask(task);
                        }} 
                        type="button" className="sm:mr-2 sm:transform sm:hover:scale-150 sm:transition sm:duration-300 sm:ease-in-out m-1 sm:m-0"
                    >
                        <svg className="svg-icon " viewBox="0 0 20 20">
                                <path fill="none" d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z"></path>
                        </svg>                 
                    </button>    

                  )

                }

                <button 
                    onClick={() => eliminarTask(task)} 
                    className="sm:transform sm:hover:scale-150 sm:transition sm:duration-300 sm:ease-in-out m-2 ml-16 sm:m-0"
                >
                    <svg className="svg-icon " viewBox="0 0 20 20">
                                <path fill="none" d="M18.693,3.338h-1.35l0.323-1.834c0.046-0.262-0.027-0.536-0.198-0.739c-0.173-0.206-0.428-0.325-0.695-0.325
                                H3.434c-0.262,0-0.513,0.114-0.685,0.312c-0.173,0.197-0.25,0.46-0.215,0.721L2.79,3.338H1.307c-0.502,0-0.908,0.406-0.908,0.908
                                c0,0.502,0.406,0.908,0.908,0.908h1.683l1.721,13.613c0.057,0.454,0.444,0.795,0.901,0.795h8.722c0.458,0,0.845-0.34,0.902-0.795
                               l1.72-13.613h1.737c0.502,0,0.908-0.406,0.908-0.908C19.601,3.744,19.195,3.338,18.693,3.338z M15.69,2.255L15.5,3.334H4.623
                                L4.476,2.255H15.69z M13.535,17.745H6.413L4.826,5.193H15.12L13.535,17.745z"></path>
                   </svg>
                </button>
            </div>
        </div>
     );
}
 
export default Box;