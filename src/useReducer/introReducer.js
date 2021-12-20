const initialState  = [{
    id: 1,
    tarea : 'Comprar pan',
    done: false
}]

const tareasReducer = ( state =  initialState, action )=>{

    //el simbolo "?" significa si en el action encuentra o tiene un atributo que se llama type ejecuta si no , no lo hace
    if(action?.type == 'agregar'){

        return [...state,action.payload];

    }

    return state;

}

let tareas = tareasReducer();

const newTarea  = {
    id : 2,
    tarea: "Aprender React",
    done: false
}

const agregarTareaAction  = {
    type: 'agregar',
    payload : newTarea
}

tareas = tareasReducer(tareas,agregarTareaAction);

console.log(tareas);