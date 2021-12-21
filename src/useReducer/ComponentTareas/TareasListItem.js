import React from 'react'

export const TareasListItem = ( { tarea, index, deleteItem, marcarCompletado } ) => {
    return (
        <div className='row'>
            <li key={tarea.id} className='list-group-item'> 
                                        
                <p
                    onClick={ () => marcarCompletado(tarea.id)}
                                         
                    className= { `${ tarea.done === true ?'complete' : '' } `  }
                > 
                    {index + 1}. {tarea.descripcion}
                </p>

                <button 
                    className="btn btn-danger"
                    onClick={ ()=> deleteItem(tarea.id) }
                >
                                                
                                            
                    Borrar

                </button>

            </li>


        </div>
    )
}
