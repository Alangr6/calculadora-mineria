import React from 'react'

export const Footer = () => {

  function handleSubmit(e) {
    const API_URL = "http://localhost:8000/email/create";
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('loggedNoteAppUser')}`
        },
        body: JSON.stringify({
            email : window.document.getElementById('email').value ,
          

        })
    });

    e.preventDefault();
}
  return (
    <footer className='footer'>
      <div className='footer2'>
        <div className='footer-contenido'>
          <h2 className='footer-titulo'>Newsletter Signup</h2>
          <p className='footer-parrafo'>Subscribe to our newsletter to get weekly updates on our services, special offers, and exclusives.</p>
        </div>
        <form className='footer-input-boton'>
          <input type="email" name="email" id="email" className='footer-input' placeholder="Email" required="required" ></input>
          <button onClick={handleSubmit}  className='footer-boton'>Subscribe</button>
        </form>

      </div>


    </footer>
  )
}
