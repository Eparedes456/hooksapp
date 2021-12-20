import React from 'react'

export const TareasList = ( tareas,deleteItem, marcarCompletado ) => {
    return (
        
            <ul className='list-group list-group-flush'>
                        {
                            tareas.map( (tarea,i)  =>(
                                <div className='row'>
                                    <li key={tarea.id} className='list-group-item'> 
                                        
                                        <p
                                            onClick={ () => marcarCompletado(tarea.id)}
                                         
                                            className= { `${ tarea.done === true ?'complete' : '' } `  }
                                        > 
                                            {i + 1}. {tarea.descripcion} </p>

                                        <button 
                                            className="btn btn-danger"
                                            onClick={ ()=> deleteItem(tarea.id) }
                                        >
                                                
                                            
                                            Borrar
                                        </button>
                                    </li>


                                </div>
                                
                            ))
                        }
                
            </ul>

        
    )
}
