import React from 'react';
import './Inicio.css'; // Ensure you create this CSS file for specific styles

function Inicio() {
    return (
        <div className="hero-section">
            <h1 className="animated-title">Bienvenidos a Bar Makario</h1>
            <p>Disfruta de la mejor experiencia en nuestro bar. Haz tu reserva y asegúrate de tener tu mesa lista para tu próxima visita.</p>
            <a href="/reservas" className="btn-reserve">Haz tu Reserva</a>
        </div>
    );
}

export default Inicio;
