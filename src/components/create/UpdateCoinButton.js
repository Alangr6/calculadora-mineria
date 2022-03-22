export const UpdateCoinButton = () => {


    function handleSubmit(e) {
        const API_URL = "http://localhost:8000/api/crypto/update/105";
      /*   const select = document.getElementById('algorithm');
        const algorithm = select.options[select.selectedIndex]; */
        fetch(API_URL, {
            method: 'PUT',
            body: JSON.stringify({
                name: window.document.getElementById('name').value ,
                price: window.document.getElementById('price').value,
                creation_date: window.document.getElementById('creation_date').value,
                algorithm: window.document.getElementById('algorithm').value

            })
        });
    
        e.preventDefault();
    }
    

  return (
    <div><form className="crear-formulario">
  

    <label className='crear-label'>Nombre
        <input name='name' type="text" className='crear-input' id="name" />
    </label>
    <label className='crear-label'>Precio
        <input name='price' type="number" className='crear-input' id="price" />
    </label>
    <label className='crear-label'>Fecha de creacion
        <input name='creation_date' type="date" className='crear-input' id="creation_date" />
    </label>
    <label className="crear-label">Algoritmo
                        <select id="algorithm" className='crear-select'>
                            <option value="SHA-256">SHA-256</option>
                            <option value="Ethash"> Ethash</option>
                        </select>
                    </label>

    <button onClick={handleSubmit} className='crear-boton'>
        Actualizar
    </button>
</form>
</div>
  )
}
