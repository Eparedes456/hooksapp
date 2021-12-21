import React from 'react';
import { TareasListItem } from './TareasListItem';

export const TareasList = (  { tareas,deleteItem, marcarCompletado }) => {
    return (
        
            <ul className='list-group list-group-flush'>
                        {
                            tareas.map( (tarea,i)  =>(
                                
                                < TareasListItem 
                                    tarea = { tarea }
                                    index = { i }
                                    deleteItem = { deleteItem }
                                    marcarCompletado = { marcarCompletado }
                                />

                                
                            ))
                        }
                
            </ul>

        
    )
}
