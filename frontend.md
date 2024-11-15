# Frontend Setup for Restaurant Reservation System

This guide will walk you through setting up the frontend of the restaurant reservation system using React on a Windows system, with Visual Studio Code (VS Code) as the IDE.

## Overview
- **Frontend**: React
- **IDE**: Visual Studio Code

## Prerequisites
1. **A Windows Computer**
2. **Internet Connection**

---

## Step 1: Setting Up the Frontend Project Directory
1. **Navigate to the `frontend` folder** inside the main project directory:
   - Inside the `restaurant_reservation_system` folder, create a `frontend` folder.

---

## Step 2: Frontend Setup with React

### 2.1 Initialize React Project
1. **Path**: `restaurant_reservation_system/frontend`
   - Initialize a React app:
   ```sh
   npx create-react-app .
   ```

### 2.2 Install Dependencies
1. **Path**: `restaurant_reservation_system/frontend`
   - Install Axios for API requests:
   ```sh
   npm install axios
   ```
2. **Path**: `restaurant_reservation_system/frontend`
   - Install React Router for page navigation:
   ```sh
   npm install react-router-dom
   ```

---

## Step 3: Create Frontend Components

### 3.1 Create Reservation Form Component
1. **ReservationForm.js** (in `frontend/src/components`):
   ```javascript
   import React, { useState } from 'react';
   import axios from 'axios';
   import './ReservationForm.css';  // Import CSS for styling

   function ReservationForm() {
       const [customerName, setCustomerName] = useState('');
       const [customerEmail, setCustomerEmail] = useState('');
       const [phoneNumber, setPhoneNumber] = useState('');
       const [reservationDate, setReservationDate] = useState('');
       const [guestsCount, setGuestsCount] = useState(1);
       const [specialRequest, setSpecialRequest] = useState('');

       const handleSubmit = (e) => {
           e.preventDefault();

           // Data to be sent to the backend
           const reservationData = {
               customer_name: customerName,
               customer_email: customerEmail,
               phone_number: phoneNumber,
               reservation_date: reservationDate,
               guests_count: guestsCount,
               special_request: specialRequest,
           };

           // Make a POST request to the backend API
           axios.post('http://localhost:8000/api/reservations/', reservationData, {
               headers: {
                   'Content-Type': 'application/json',
               },
           })
           .then((response) => {
               alert('¡Reserva añadida con éxito!');
               // Clear the form
               setCustomerName('');
               setCustomerEmail('');
               setPhoneNumber('');
               setReservationDate('');
               setGuestsCount(1);
               setSpecialRequest('');
           })
           .catch((error) => {
               console.error('Error al añadir la reserva:', error);
               alert('Error al añadir la reserva. Por favor, inténtalo de nuevo.');
           });
       };

       return (
           <div className="reservation-container">
               <h1 className="reservation-title">Sistema de Reservas del Restaurante</h1>
               <form onSubmit={handleSubmit} className="reservation-form">
                   <div className="form-group">
                       <label>Nombre del Cliente:</label>
                       <input
                           type="text"
                           value={customerName}
                           onChange={(e) => setCustomerName(e.target.value)}
                           required
                       />
                   </div>
                   <div className="form-group">
                       <label>Correo Electrónico:</label>
                       <input
                           type="email"
                           value={customerEmail}
                           onChange={(e) => setCustomerEmail(e.target.value)}
                           required
                       />
                   </div>
                   <div className="form-group">
                       <label>Número de Teléfono:</label>
                       <input
                           type="tel"
                           value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}
                           required
                       />
                   </div>
                   <div className="form-group">
                       <label>Fecha de la Reserva:</label>
                       <input
                           type="datetime-local"
                           value={reservationDate}
                           onChange={(e) => setReservationDate(e.target.value)}
                           required
                       />
                   </div>
                   <div className="form-group">
                       <label>Número de Invitados:</label>
                       <input
                           type="number"
                           value={guestsCount}
                           onChange={(e) => setGuestsCount(e.target.value)}
                           min="1"
                           required
                       />
                   </div>
                   <div className="form-group">
                       <label>Peticiones Especiales:</label>
                       <textarea
                           value={specialRequest}
                           onChange={(e) => setSpecialRequest(e.target.value)}
                       />
                   </div>
                   <button type="submit" className="submit-button">Añadir Reserva</button>
               </form>
           </div>
       );
   }

   export default ReservationForm;
   ```

### 3.2 Styling the Reservation Form
1. **ReservationForm.css** (in `frontend/src/components`):
   ```css
   .reservation-container {
       background-color: rgba(255, 255, 255, 0.9);
       border-radius: 15px;
       box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
       max-width: 500px;
       padding: 30px;
       margin: 20px auto;
       text-align: center;
   }

   .reservation-title {
       font-size: 2rem;
       color: #333;
       margin-bottom: 20px;
   }

   .reservation-form {
       display: flex;
       flex-direction: column;
   }

   .form-group {
       margin-bottom: 15px;
       text-align: left;
   }

   label {
       font-weight: bold;
       margin-bottom: 5px;
       display: block;
   }

   input,
   textarea {
       width: 100%;
       padding: 10px;
       border: 1px solid #ccc;
       border-radius: 5px;
       box-sizing: border-box;
   }

   .submit-button {
       background-color: #4CAF50;
       color: white;
       padding: 10px 20px;
       border: none;
       border-radius: 5px;
       cursor: pointer;
       font-size: 1rem;
   }

   .submit-button:hover {
       background-color: #45a049;
   }
   ```

---

## Step 4: Running the Frontend Application

1. **Path**: `restaurant_reservation_system/frontend`
   - Start the React development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to see the reservation form.

---

After completing these steps, your frontend should be set up and ready to connect with the backend. You can now start making reservations through the form, which will be saved in the backend database.

Let me know if you need any help with further modifications or styling!

