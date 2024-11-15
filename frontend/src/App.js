import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ReservationForm from './components/ReservationForm';
import Inicio from './components/Inicio';
import Contact from './components/Contact'; // Import the Contact component
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* Navigation Bar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Bar Makario</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/reservas">Reservas</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/contacto">Contacto</Link> {/* Link to Contact component */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/reservas" element={<ReservationForm />} />
                    <Route path="/contacto" element={<Contact />} /> {/* Route for Contact component */}
                </Routes>

                {/* Footer */}
                <footer className="footer bg-dark text-white mt-5 p-3 text-center">
                    <p>&copy; 2024 Bar Makario. Todos los derechos reservados.</p>
                    <p>Síguenos en <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a> | <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">Facebook</a></p>
                </footer>
            </div>
        </Router>
    );
}

export default App;