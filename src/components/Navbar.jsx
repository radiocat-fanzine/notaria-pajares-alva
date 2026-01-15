import '../styles/Navbar.css';
import logo from '../assets/logo-notaria.png';

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="nav-container">
            <div className="nav-brand">
            <img src={logo} alt="Logo Notaría Pajares Alva" className="nav-logo" />
            <span className="nav-title">Pajares Alva</span>
            </div>
            
            <ul className="nav-links">
            <li><a href="#tramites">Trámites</a></li>
            <li><a href="#nosotros">Institucional</a></li>
            <li><a href="#contacto">Contacto</a></li>
            </ul>

            <div className="nav-actions">
            <button className="btn-nav-outline">Ubicación</button>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;