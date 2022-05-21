import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import loginService from './LoginFunction';


export const Login = () => {

    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);



    const API_URL = "http://localhost:8000/api/login_check";

  
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
        const token = await loginService.loginFunction({
                username,
                password
            })
            console.log(token);
            setUser(token)
            setUsername('')
            setPassword('')
        } catch (err) {
            
        }

      
    }

    

    return (
        <div className='title-login'>
            <h1 className='title-login2'>Iniciar sesion</h1>
            <form method='' className="crear-formulario" >

                <label className='crear-label'>Email
                    <input value={username} onChange={({target}) => setUsername(target.value)} name='username' type="email" className='crear-input' id="username" />
                </label>
                <label className='crear-label'>Password
                    <input value={password} onChange={({target}) => setPassword(target.value)} name='password' type="password" className='crear-input' id="password" />
                </label>


                <button onClick={handleSubmit} className='crear-boton2' >
                    Iniciar sesion
                </button>

            </form>
    
        </div>

    )
}
