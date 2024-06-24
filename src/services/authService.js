
import axios from 'axios';
import Cookies from 'js-cookie';
import store from '@/store';


const API_URL = 'http://localhost:8080/api/auth';

export const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export const register = async (registerData) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, registerData);
      return response.data;
    } catch (error) {
      throw new Error(error.response ? error.response.data.message : error.message);
    }
  };

export const saveToken = (token, rememberMe) => {
  if (rememberMe) {
    Cookies.set('authToken', token, { expires: 5 / 24 }); // 5 hours
  } 
  store.commit('SET_LOGIN_STATUS', true);
  store.commit('SET_TOKEN', token);
  
};
