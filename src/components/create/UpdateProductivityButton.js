import { useEffect, useState } from "react";


export const UpdateProductivityButton = () => {

    useEffect(() => {
        cargarDatosCrypto()
        cargarDatosDevice()
      return () => {

        }
    }, [])

    function handleSubmit(e) {
        console.log(window.location.href);
        const API_URL = "http://localhost:8000/api/crypto/device/update";
        fetch(API_URL + window.location.pathname,
            {
                method: 'PUT',
                body: JSON.stringify({
                    crypto_id: window.document.getElementById('crypto_id').value,
                    device_id: window.document.getElementById('device_id').value,
                    benefits: window.document.getElementById('benefits').value

                })
            });

        e.preventDefault();
    }

    const [crypto, setCrypto] = useState([]);
    const [device, setDevice] = useState([]);



    function cargarDatosCrypto() {
        const API_URL = 'http://localhost:8000/api/crypto/read';

        fetch(API_URL)
            .then(request => request.json())
            .then((dataResponse) => {
                setCrypto(dataResponse.data)
                console.log(dataResponse);
            })

            .catch(console.log()

            )
    };
    function cargarDatosDevice() {
        const API_URL = 'http://localhost:8000/api/device/read';

        fetch(API_URL)
            .then(request => request.json())
            .then((dataResponse) => {
                setDevice(dataResponse.data)
                console.log(dataResponse);
            })

            .catch(console.log()

            )
    };
    console.log(crypto);
    console.log(device);


    return (
        <div>
            <form className="crear-formulario">
                <label className="crear-label">Crypto
                    <select id="crypto_id" className='crear-select'>
                   {crypto.map((crypt) => {
                            return <option value={crypt.id}>{crypt.name}</option>

                        }
                        )}
                    </select>
                </label>
                <label className="crear-label">Device
                    <select id="device_id" className='crear-select'>
                    {device.map((device) => {
                            return <option value={device.id}>{device.name}</option>

                        }
                        )}
                    </select>
                </label>
                <label className='crear-label'>Beneficio
                    <input name='name' type="number" className='crear-input' id="name" />
                </label>

                <button onClick={handleSubmit} className='crear-boton'>
                    Actualizar
                </button>
            </form>
        </div>
    )
}
