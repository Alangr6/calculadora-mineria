import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import loginService from './LoginFunction';


export const Login = () => {
    const API_URL = "http://localhost:8000/api/login_check";

    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

   

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        if (loggedUserJSON) {
            /* const user = JSON(loggedUserJSON) */
            setUser(user)
        }
    }, [])



    const baseUrl = 'http://localhost:8000/api/login_check'

    const loginFunction = async credentials => {
        axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('loggedNoteAppUser')}`
        const { data } = await axios.post(baseUrl, credentials, {
            headers: {
                Accept: 'application/json',
            }
        })/* .then(res => console.log(res)).catch(err => console.log(err)) */
        console.log(data.token);
        return data
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const user = await loginFunction({
                username,
                password
            })

            window.localStorage.setItem(
                'loggedNoteAppUser', user.token
            )

            console.log(user.token);
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (err) {
            setErrorMessage('Usuario o contrasena incorrectas')
            setTimeout(() => {
                setErrorMessage(null)
            }, 4000);
        }


    }



    return (
        <div className='title-login'>
            <h1 className='title-login2'>Iniciar sesion</h1>
            <h4 className='error-message'>{errorMessage}</h4>
            <form method='' className="crear-formulario" >

                <label className='crear-label'>Email
                    <input value={username} onChange={({ target }) => setUsername(target.value)} name='username' type="email" className='crear-input' id="username" />
                </label>
                <label className='crear-label'>Password
                    <input value={password} onChange={({ target }) => setPassword(target.value)} name='password' type="password" className='crear-input' id="password" />
                </label>


                <button onClick={handleSubmit} className='crear-boton2' >
                    Iniciar sesion
                </button>

            </form>

        </div>

    )
}
