import React from 'react'

export const Login = () => {

    function handleSubmit(e) {
        const API_URL = "http://localhost:8000/login";
        fetch(API_URL, {
        
        });
    
        e.preventDefault();
    }

    return (
        <div className='title-login'>
            <h1 className='title-login2'>Iniciar sesion</h1>
            <form method="" className="crear-formulario" >

                <label className='crear-label'>Email
                    <input name='email' type="email" className='crear-input' id="email" />
                </label>
                <label className='crear-label'>Password
                    <input name='password' type="password" className='crear-input' id="password" />
                </label>


                <button onClick={handleSubmit} className='crear-boton2' >
                    Iniciar sesion
                </button>

            </form>
        </div>

    )
}
