import React, { useEffect, useState} from 'react';
import '../useEffect/effets.css';

export const SimpleForm = () => {

    const [formstate, setFormState] = useState({
        name    :   '',
        email   :   ''
    });

    const { name , email} = formstate;

    useEffect(()=>{
        console.log('hey!');
    },[]);

    useEffect(()=>{
        console.log('form cambio!');
    },[formstate]);

    useEffect(()=>{
        console.log('email cambio!');
    },[email]);

    const handleInputChange = (e) =>{
        
        setFormState({
            ...formstate,
            [e.target.name] : e.target.value
        })

    }

    return (
        <>
            <h1>useEffect</h1>
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

        </>
    )
}
