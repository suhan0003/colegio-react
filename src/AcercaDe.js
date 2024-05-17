import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout} from './auth';  
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AcercaDe = () => {

    const token = useSelector(state => state.token);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

   

 useEffect(() => {
    
    
    const tokenFromStorage = localStorage.getItem('token');

    if(tokenFromStorage){
        console.log('el token existe en el local',tokenFromStorage);  
    }

    if(token){
        console.log('el token redux existe',token);  
    }

  }, [token, dispatch]);


  

  const handleLogout = async () => {
    try { 

        console.log("cerrando sesion...");
        await axios.post('http://127.0.0.1:8000/api/logout', null, { 
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
        dispatch(logout());
        navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };



  return (
    <div>
      <h1>Acerca de Nosotros</h1>
      <p>Somos una empresa dedicada a...</p>
      <p>Token recibido: {token}</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default AcercaDe;

