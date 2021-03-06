import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';


export const Login = () => {

    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);



    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        if (loggedUserJSON) {
           
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
        })
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

    const logout = async (e) => {
        e.preventDefault()

        await window.localStorage.removeItem('loggedNoteAppUser')

    }


    return (
        <div className='title-login'>
            <h1 className='title-login2'>Iniciar sesion</h1>
            <div className='error-message'>{errorMessage}</div>
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
                <button onClick={(e) => logout(e)} className='crear-boton4' >
                Cerrar sesion
            </button>

            </form>

            

        </div>

    )
}
