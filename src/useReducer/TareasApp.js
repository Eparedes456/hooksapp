import React, { useReducer, useEffect } from 'react';

import { UseForm } from '../useState/hooks/UseForm';
import { TareasList } from './ComponentTareas/TareasList';
import { tareasReducer } from './tareasReducer.js';
import './useStyle.css';



const init = () => {

    // en etsa condicion vemos si no existe osea da null que devulva un array vacio 
    // o simplemente si existe que devuelvas los valores del localstorage

    return JSON.parse(localStorage.getItem('tareas')) || [];
  
}

export const TareasApp = () => {

    //dispatch => es el atributo o elemento que reconoce que reducer estamos utilizando
    

    const [tareas, dispatch] = useReducer(tareasReducer, [],init);
    const [ { description }, handleInputChange,reset]  = UseForm({
        description : ''
    });

    useEffect(() => {
        
        //El localStorage solo graba valores tipos string
        //.setItem inserta el valor para permancer en el local storage
        // .setitem('nombredelvalorstorage', valor a guardarse)
        localStorage.setItem('tareas',JSON.stringify(tareas))

    }, [tareas]);


    //console.log(description)

    const agregarNuevo = (e)=>{
        e.preventDefault();

        if(description.trim().length <= 1){
            console.log('Descripcion : ' + description);
            return;
        }
        //console.log('Descripcion : ' + description);
        const newtarea = {

            id: new Date().getTime(),
            descripcion: description,
            done: false

        }

        const addTarea = {
            type : 'agregar',
            payload: newtarea
        }

        dispatch(addTarea);
        console.log(description);
        reset();
    }



    const deleteItem = (tareaId) =>{

        console.log(tareaId);

        const deleteTarea = {
            type : 'eliminar',
            payload: tareaId
        }  
        console.log(deleteTarea);

        dispatch(deleteTarea);

    }


    const marcarCompletado = (tareaId)  =>{
        console.log(tareaId);
        const updateDone = {
            type        :  'actualizar',
            payload     :   tareaId
        }
        dispatch(updateDone);
    }


    return (
        <div>
            <h1>Use Reducer  - Tareas App</h1>
            <hr/>

            <div className='row'>

                <div className='col-7'>
                    <h2>Tareas pendientes { tareas.length }</h2>
                    < TareasList 
                        tareas={ tareas }
                        deleteItem  = { deleteItem }
                        marcarCompletado   = { marcarCompletado }
                    />
                    
                </div>

                <div className='col-5'>

                    <form onSubmit={agregarNuevo}>
                        <input 
                            type="text" 
                            name="description"
                            value={description}
                            //ref="descripcion"
                            autoComplete='off' 
                            placeholder='Ingrese la nueva tarea' 
                            className='form-control'
                            onChange={ handleInputChange }
                        />
                    </form>
                    <br/>
                    <button
                        type='submit' 

                        className="btn btn-primary"
                        onClick={agregarNuevo}
                        
                    >
                        Nueva Tarea
                    </button>
                
                </div>

                
            </div>

            

            
            



        </div>
    )
}
