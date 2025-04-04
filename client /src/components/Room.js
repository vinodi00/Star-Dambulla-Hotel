import React from 'react'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';
function Room({ room }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='row bs'>
            <div className="col-md-3">
                <img src={room.imageurls[0]} className='smallimg' alt="" />

                <div className="col-md-10">
                    <h1>{room.name}</h1>
                    <b><p>Max Count: {room.maxcount} </p>
                        <p>PhoneNumber:{room.phonenumber} </p>
                        <p>Type : {room.type}</p></b>
                        
                </div>
                <div style={{ float: 'right' }}>
                        <button className='btn btn-primary md-3' onClick={handleShow}>view Details</button>
                </div>
               
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {room.imageurls.map(url => {
                            return<Carousel.Item>
                                <img className="d-block w-100 bigimg" src={url} alt="First slide" />

                            </Carousel.Item>
                 
                    })}
                    </Carousel>
                    <p>{room.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} size='lg'>
                        Close
                    </Button>
                    <Button><a href='/payment'>payment</a></Button>



                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Room;