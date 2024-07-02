import React from 'react';
import './navbar.css'; // Estilo opcional para la barra de navegación

const Navbar = () => {
return (
    <nav className="navbar">
    <div className="navbar-left">
        <span className="navbar-brand">Vape Club</span>
    </div>
    <div className="navbar-right">
        <button className="navbar-button">Inicio</button>
        <button className="navbar-button">Contacto</button>
        <button className="navbar-button">Catálogo</button>
    </div>
    </nav>
);
};

export default Navbar;

