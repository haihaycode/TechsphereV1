
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
  Cookies.set('authToken', token, { expires: 1 / 24 }); // 5 hours
  store.commit('SET_LOGIN_STATUS', true);
  store.commit('SET_TOKEN', token);
  
};

export const accountService = async () => {
  const token = store.state.token;
  if (token) {
    try {
      const response = await axios.get(`${API_URL}/account/auth`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response ? error.response.data.message : error.message);
    }
  } else {
    throw new Error('No token found');
  }
};


export const getAvatar = async (image) => {
  const token = store.state.token;
  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await axios.get(`http://localhost:8080/api/public/client/image/${image}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      responseType: 'arraybuffer' 
    });

    const base64Image = arrayBufferToBase64(response.data);
    return `data:image/jpeg;base64,${base64Image}`;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

//update image account


export const senotp = async (email) => {
  const token = store.state.token;
  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await axios.post(`${API_URL}/send`, email,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};


export const updateAccount = async (accountData) => {
  const token = store.state.token;
  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await axios.post(`${API_URL}/account/update/profile`, accountData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export const changpassword = async (data) => {
  const token = store.state.token;
  if (!token) {
    throw new Error('No token found');
  }
  try {
    console.log("haha"+data);
    const response = await axios.post(`${API_URL}/verify`, data, {
      headers: {
         Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};