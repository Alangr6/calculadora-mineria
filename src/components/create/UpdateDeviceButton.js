
export const UpdateDeviceButton = () => {

    function handleSubmit(e) {
        const API_URL = "http://localhost:8000/api/device/update";
        fetch(API_URL + window.location.pathname, 
            {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('loggedNoteAppUser')}`
                },
                body: JSON.stringify({
                    type : window.document.getElementById('type').value,
                    name : window.document.getElementById('name').value ,
                    price : window.document.getElementById('price').value,
                    comsumption :window.document.getElementById('comsumption').value,
                    hashrate : window.document.getElementById('hashrate').value

                })
            });

        e.preventDefault();
    }

    

    

    return (
        
        <div>
             <form  className="crear-formulario">
               
               <label className='crear-label'>Nombre
                   <input type="text" className='crear-input' id='name'/>
               </label>
               <label className='crear-label'>Precio
                   <input type="number" className='crear-input' id='price' />
               </label>
               <label className="crear-label" >Tipo
                   <select id='type' className='crear-select'>
                       <option value="ASIC">ASIC</option>
                       <option value="GPU"> GPU</option>
                   </select>
               </label>
               <label className='crear-label' >Hashrate
                   <input type="number" id='hashrate' className='crear-input' />
               </label>
               <label className='crear-label' >Energia
                   <input type="number" id='comsumption' className='crear-input' />
               </label>
               <button onClick={handleSubmit} className='crear-boton'>
                   Crear
               </button>

           </form>
        </div>
    )
}
