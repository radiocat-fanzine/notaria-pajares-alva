import '../styles/Navbar.css';
import logo from '../assets/logo-notaria.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-brand">
                    <img src={logo} alt="Logo" className="nav-logo" />
                </div>

                <a href="#contacto" className="nav-location-tag">
                    <span className="location-icon">📍</span>
                    <span className="location-text">Trujillo / Huanchaco, Perú</span>
                </a>
                
                <ul className="nav-links">
                    <li><a href="#inicio">Portal</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#pre-cita">Pre-Cita</a></li>
                    <li><a href="#notaria">La Notaría</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;