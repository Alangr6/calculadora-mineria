import { React, useEffect, useState } from "react";
import { Navbar3 } from "../router/Navbar3";
import { Navbar4 } from "../router/Navbar4";
import { Navbar6 } from "../router/Navbar6";


export const AddProductivity = () => {

    useEffect(() => {
        cargarDatosCrypto()
        cargarDatosDevice()

        return () => {

        }
    }, [])
    const [crypto, setCrypto] = useState([]);
    const [device, setDevice] = useState([]);



    function cargarDatosCrypto() {
        const API_URL = 'http://localhost:8000/api/crypto/read';
        const token = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('loggedNoteAppUser')}`
            }
        }
        fetch(API_URL, token)
            .then(request => request.json())
            .then((dataResponse) => {
                setCrypto(dataResponse.data)
            })

            .catch(console.log()

            )
    };
    function cargarDatosDevice() {
        const API_URL = 'http://localhost:8000/api/device/read';
        const token = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('loggedNoteAppUser')}`
            }
        }
        fetch(API_URL, token)
            .then(request => request.json())
            .then((dataResponse) => {
                setDevice(dataResponse.data)
            })

            .catch(console.log()

            )
    };





    function handleSubmit(e) {
        const API_URL = "http://localhost:8000/api/crypto/device/create";
        fetch(API_URL, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('loggedNoteAppUser')}`
            },
            method: 'POST',
            body: JSON.stringify({
                crypto_id: window.document.getElementById('crypto_id').value,
                device_id: window.document.getElementById('device_id').value,
                benefits: window.document.getElementById('benefits').value

            })
        });

        e.preventDefault();
    }

    const API_URL = "http://localhost:8000/api/crypto/device/create";
    if (!device || !crypto) {
        return (<div>
            <Navbar3></Navbar3>
            <Navbar6></Navbar6>
            <h1 className='crear-titulo'>Añadir Productividad</h1>
            <div className="log-field">Tienes que Iniciar sesion para ver este campo</div>
        </div>)

    } else {
        return (
            <div>
                <Navbar3></Navbar3>
                <Navbar6></Navbar6>
                <h1 className='crear-titulo'>Anadir Productividad</h1>
                <form action={API_URL} method="POST" className="crear-formulario" >



                    <label className="crear-label">Moneda
                        <select id="crypto_id" className='crear-select'>
                            {crypto.map((crypto) => {
                                return <option value={crypto.id}>{crypto.name}</option>

                            }
                            )}
                        </select>
                    </label>
                    <label className="crear-label">Dispositivo
                        <select id="device_id" className='crear-select'>
                            {device.map((device) => {
                                return <option value={device.id}>{device.name}</option>

                            }
                            )}
                        </select>
                    </label>
                    <label className='crear-label'>Beneficio
                        <input name='benefits' type="number" className='crear-input' id="benefits" />
                    </label>

                    <button onClick={handleSubmit} className='crear-boton2' >
                        Crear
                    </button>

                </form>

            </div>

        )
    }

}
