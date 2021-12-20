
export const tareasReducer = (state = [],action)=>{

    switch (action.type) {
        case 'agregar':
            return [...state,action.payload];
           
        case 'eliminar':
            return state.filter( tarea => tarea.id != action.payload);
            
        case 'actualizar':
            // state.map() accione un recorrido es como si fuera un foreach in flutter
            return state.map(tarea=>{
                if(tarea.id === action.payload){
                    return {
                        ...tarea,
                        done : !tarea.done
                    }
                }else{
                    return tarea;
                }
            })
        default:
            return state;
    }

    

}