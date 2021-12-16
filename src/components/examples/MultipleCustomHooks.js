import React from 'react';
import '../../useEffect/effets.css';
import { useCounter } from '../../useState/hooks/useCounter';
import { useFetch } from '../../useState/hooks/useFetch';


export const MultipleCustomHooks= () => {

    const {counter,increment} = useCounter(1);

    const {loading,data} = useFetch(`https:www.breakingbadapi.com/api/quotes/${counter}`);

    // !!data => significa que si hay datos si es verdadero hace lo siguiente

    const { author , quote} = !!data && data[0];

    console.log(loading);



    return (
        <div>
            <h1>Breaking Bad Phrases</h1>
            <hr/>

            {
                loading ? 
                (  
                    <div className='alert alert-info text-center'>
                        Loading ...
                
                    </div>

                ):
                (


                    <blockquote className='blockquote text-right'>
                        <p className='mb-0'>{ quote }</p>
                        <br/>
                        <footer className='blockquote-footer'>
                        { author }
                        </footer>
                    
                    </blockquote>

                )
            }

           
            <button 
                className='btn btn-primary'
                onClick={increment}
            > 
                Next Phrase
            </button>
           
            
        </div>
    )
}
