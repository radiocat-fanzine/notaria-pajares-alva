import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo-notaria.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-brand">
                    <img src={logo} alt="Logo" className="nav-logo" />
                </div>

                {/* BOTÓN HAMBURGUESA: Ahora solo compite con el logo */}
                <button className="hamburger-button" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '✕' : '☰'} 
                </button>
                
                {/* MENÚ DESPLEGABLE */}
                <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
                    {/* Ubicación agrupada dentro del menú en móvil */}
                    <li className="nav-location-mobile">
                        <div className="nav-location-tag">
                            <span className="location-icon">📍</span>
                            <span className="location-text">Trujillo, Perú</span>
                        </div>
                    </li>
                    
                    <li><a href="#inicio" onClick={() => setIsOpen(false)}>Portal</a></li>
                    <li><a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a></li>
                    <li><a href="#pre-cita" onClick={() => setIsOpen(false)}>Pre-Cita</a></li>
                    <li><a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;