import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">STAR DAMBULLA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/book">Book</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/room">Room</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
                        </li>


                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/register">
                                Register
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login">
                                Login
                            </NavDropdown.Item>
                        </NavDropdown>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
