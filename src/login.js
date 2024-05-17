import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from './auth'; 
import { useNavigate } from 'react-router-dom';
import { login } from './axios/response'; 
import 'bootstrap/dist/css/bootstrap.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    console.log("iniciando login...");
    try {
      const response = await login(email, password); 
      dispatch(loginSuccess(response.data.access_token)); 
      navigate('/acerca-de');
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
      setError('Usuario o contraseña incorrectos'); 
    }
  };

  return (
    <div>
      
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{ width: '30%' }}>
          <div className='card-body'>

          <div style={{ fontWeight: '500', fontFamily : 'Verdana' }} className='card-title d-flex justify-content-center '>Iniciar Sesión</div>
            <label>Correo</label>
            <input className='form-control' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br></br>
            <label>Contraseña</label>
            <input className='form-control' type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br></br>
            <button style={{ width: '100%'}} className='btn btn-primary' onClick={handleLogin}>Entrar</button>
            <br></br>
            {error && <p style={{ fontSize: '12px', color:'red' }}>{error}</p>} 

          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
