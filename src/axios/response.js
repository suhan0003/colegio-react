import axios from 'axios';  

const API_URL = 'http://127.0.0.1:8000/api'; 

export const login = (email, password) => {  
  return axios.post(`${API_URL}/login`, { email, password });
};

export const resetPassword = (email) => {    
  return axios.post(`${API_URL}/password/reset-request` , { email }); 
};
