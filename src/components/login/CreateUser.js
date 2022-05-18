import React from 'react'

export const CreateUser = () => {

    function handleSubmit(e) {
        const API_URL = "http://localhost:8000/api/login/create";
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                name : window.document.getElementById('name').value ,
                username : window.document.getElementById('username').value,
                email :window.document.getElementById('email').value,
                password : window.document.getElementById('password').value

            })
        });
    
        e.preventDefault();
    }
    const API_URL = "http://localhost:8000/login/create";


  return (
      <div className='title-login'>
          <h1 className='title-login2'>Crear usuario</h1>
          <form action={API_URL} method="POST" className="crear-formulario" >
        <label className='crear-label'>Nombre
            <input name='name' type="text" className='crear-input' id="name" />
        </label>
        <label className='crear-label'>Nombre de usuario
            <input name='username' type="text" className='crear-input' id="username" />
        </label>
      
        <label className='crear-label'>Email
            <input name='email' type="email" className='crear-input' id="email" />
        </label>
        <label className='crear-label'>Password
            <input name='password' type="password" className='crear-input' id="password" />
        </label>
        
      
        <button onClick={handleSubmit} className='crear-boton2' >
            Crear Usuario
        </button>

    </form>
      </div>
   
    )
}
