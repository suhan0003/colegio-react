import React, { useState } from 'react';
//import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { resetPassword } from '../axios/response'; 

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //const [show, setShow] = useState(false); // Estado para controlar la visibilidad del modal

    //const handleClose = () => setShow(false); // Función para cerrar el modal 
    //const handleShow = () => setShow(true); // Función para abrir el modal

    const handleResetPassword = async () => { 
        try {
            const response = await resetPassword(email);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error al enviar la solicitud de restablecimiento de contraseña');
        }
    };

    return (
        <div>
            {/*

            <Modal show={show} onHide={handleClose} centered>

                <Modal.Header closeButton>
                    <Modal.Title>Modal centrado</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Contenido del modal centrado...
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                    </Button>
                 
                </Modal.Footer> 

            </Modal> */}

            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card" style={{ width: '30%' }}>
                    <div className='card-body'>
                       
                        <div style={{ fontWeight: '500', fontFamily : 'Verdana' }} className='card-title'>Recuperar Contraseña</div>
                        <input className='form-control' type="email" placeholder='Ingrese el correo.' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br></br>
                        <div style={{ display: 'flex', justifyContent : 'right'}}>
                        <button style={{ width: '100%'}} className='btn btn-primary' onClick={handleResetPassword}>Enviar</button>
                        </div>
                        <br></br>
                        <span style={{ fontSize: '12px' }}>*Le enviaremos la nueva contraseña a su correo.</span>
                        {message && <p style={{ fontSize: '12px', color:'red' }}>{message}</p>}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ResetPassword;
