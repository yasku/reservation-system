import React from 'react';
import './Contact.css'; // Create this CSS file for specific styles

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contacto</h1>
            <p>Para más información, puedes contactarnos a través de nuestras redes sociales o enviarnos un correo electrónico a info@barmakario.com.</p>
            <p>Síguenos en nuestras redes sociales:</p>
            <ul>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
        </div>
    );
}

export default Contact;