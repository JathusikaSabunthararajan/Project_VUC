import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Home.css';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="home">
            <nav className="navbar">
                <div className="navbar-container container">
                    <div className='logo'>
                        <img src="../assets/logo.png" alt="Vavuniya Campus Logo" className='logo-img'/>
                        <span>Vavuniya Campus</span>
                    </div>
                    
                    <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                        <div className="nav-item">
                            <a href="/" className="nav-link active">Home</a>
                        </div>
                        <div className="nav-item">
                            <a href="/about" className="nav-link">About</a>
                        </div>
                        <div className="nav-item">
                            <a href="/academics" className="nav-link">Academics</a>
                        </div>
                        <div className="nav-item">
                            <a href="/admissions" className="nav-link">Admissions</a>
                        </div>
                        <div className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </div>
                    </div>

                    <div className="hamburger" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Home;