import React, {useEffect} from 'react'

export const Messagess = () => {

    useEffect(() => {
        console.log('componente montado');
        return () => {
            console.log('componente limpiado');
        }
    }, [])


    return (
        <div>
            <h1>Eres genial</h1>
        </div>
    )
}
