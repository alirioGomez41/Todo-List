import React from 'react';
import Box from './Box'


const BoxList = ({tasks, traerTask}) => {
    return (  
        <>
        {tasks.length === 0? 
            <p className="bg-white text-red-500 m-2 w-10/12 text-center p-2 text-xl text-left ml-12">
               No tasks available</p>
         :
         (
             tasks.map(task => (
                <Box
                    key={task.id}
                    task={task}
                    traerTask={traerTask}
                />
            ))
         )
        }
     
        </>
    );
}
 
export default BoxList;