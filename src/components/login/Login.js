import React from 'react'

export const Login = () => {

    function handleSubmit(e) {
        console.log('a');
        const API_URL = "http://localhost:8000/api/login_check";
        fetch(API_URL, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username : window.document.getElementById('username').value,
                password : window.document.getElementById('password').value
            })

        });
    
        e.preventDefault();
    }

    return (
        <div className='title-login'>
            <h1 className='title-login2'>Iniciar sesion</h1>
            <form method="POST" className="crear-formulario" >

                <label className='crear-label'>Email
                    <input name='username' type="email" className='crear-input' id="username" />
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
