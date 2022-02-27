import React from 'react'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer2'>
        <div className='footer-contenido'>
          <h2 className='footer-titulo'>Newsletter Signup</h2>
          <p className='footer-parrafo'>Subscribe to our newsletter to get weekly updates on our services, special offers, and exclusives.</p>
        </div>
        <form className='footer-input-boton'>
          <input type="email" name="email" className='footer-input' placeholder="Email" required="required" ></input>
          <button className='footer-boton'>Subscribe</button>
        </form>

      </div>


    </footer>
  )
}
