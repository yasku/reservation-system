import React, { useState } from 'react';
import axios from 'axios';
import './ReservationForm.css';

const ReservationForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [guestsCount, setGuestsCount] = useState(1);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!customerName || !customerEmail || !phoneNumber || !reservationDate || !selectedTimeSlot) {
            alert('Por favor complete todos los campos requeridos.');
            return;
        }
        axios.post('http://localhost:8000/api/reservas/', {
            customer_name: customerName,
            customer_email: customerEmail,
            phone_number: phoneNumber,
            reservation_date: reservationDate,
            guests_count: guestsCount,
            time_slot: selectedTimeSlot
        })
        .then(response => {
            alert('¡Reserva enviada con éxito!');
            setCustomerName('');
            setCustomerEmail('');
            setPhoneNumber('');
            setReservationDate('');
            setGuestsCount(1);
            setSelectedTimeSlot(null);
        })
        .catch(error => {
            console.error('Hubo un error al realizar la reserva', error);
        });
    };

    const incrementGuests = () => setGuestsCount(guestsCount + 1);
    const decrementGuests = () => setGuestsCount(guestsCount > 1 ? guestsCount - 1 : 1);

    return (
        <div className="form-container rounded bg-white shadow animate__animated animate__fadeIn">
            <div className="header mb-3 text-center">
                <h3 className="animated-title">Realiza aqui tu reserva:</h3>
                <p className="subtitle">Las reservas se confirman via email o telefono. En caso de no recibir confirmacion, comunicate a nuestro WhatsApp.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-section">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
                </div>
                <div className="form-section">
                    <label className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required />
                </div>
                <div className="form-section">
                    <label className="form-label">Número de Teléfono</label>
                    <input type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div>
                <div className="form-section">
                    <label className="form-label">¿Cuántas personas?</label>
                    <div className="guest-counter">
                        <button type="button" className="btn btn-outline-secondary" onClick={decrementGuests}>-</button>
                        <span className="mx-3">{guestsCount} Personas</span>
                        <button type="button" className="btn btn-outline-secondary" onClick={incrementGuests}>+</button>
                    </div>
                </div>
                <div className="form-section">
                    <label className="form-label">Horario</label>
                    <div className="time-slots">
                        {['18:00hs', '21:00hs', '21:30hs'].map((slot, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`time-slot-btn ${selectedTimeSlot === slot ? 'active' : ''}`}
                                onClick={() => setSelectedTimeSlot(slot)}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="form-section">
                    <button type="submit" className="btn btn-primary">Reservar</button>
                </div>
            </form>
        </div>
    );
};

export default ReservationForm;