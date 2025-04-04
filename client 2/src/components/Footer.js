import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div>
            <br />
            <br />
            <br />
            <div style={{ backgroundColor: '#0A0708', color: 'white', bottom: '0', marginTop: '400px', width: '100%' }}>
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-6 col-md-2 mb-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <FontAwesomeIcon icon={faFacebookF} className="mt-2" style={{ fontSize: '19px' }} />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.instagram.com/star_dambulla/">
                                            <FontAwesomeIcon icon={faInstagram} className="mt-2" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.google.com/travel/hotels/entity/ChoI1Yamze3z3aLdARoNL2cvMTFoemh5Zno3cBAB?utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwjYsqr85_CEAxUAAAAAHQAAAAAQCA&ts=CAEaIAoCGgASGhIUCgcI6A8QAxgdEgcI6A8QAxgeGAEyAhAAKgQKABoA">
                                            <FontAwesomeIcon icon={faGoogle} className="mt-2" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                        <div>
                            <hr />
                            <p className='text-end'>© 2023 Star Dambulla, Inc. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
