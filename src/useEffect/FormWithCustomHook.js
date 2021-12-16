import React from 'react';
import '../useEffect/effets.css';
import { UseForm } from '../useState/hooks/UseForm';


export const FormWithCustomHooks = () => {

    const [formValues, handleInputChange] = UseForm({
        name        :   '',
        email       :   '',
        password    :   ''
    });

    const { name , email, password} = formValues;

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        console.log(formValues);
    }


    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className="form-group">
                <input 
                    type="text"
                    name = "name"
                    className = "form-control"
                    placeholder = "Tu nombre"
                    autoComplete = "off"
                    value = { name }
                    onChange = { handleInputChange }

                />

            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name = "email"
                    className = "form-control"
                    placeholder = "jhondoe@gmail.com"
                    autoComplete = "off"
                    value = { email }
                    onChange = { handleInputChange }

                />

            </div>


            <div className="form-group">
                <input 
                    type="password"
                    name = "password"
                    className = "form-control"
                    placeholder = "*******"
                    autoComplete = "off"
                    value = { password }
                    onChange = { handleInputChange }

                />

            </div>

            <button type='submit' className='btn btn-primary' >Guardar </button>
           

        </form>
    )
}
