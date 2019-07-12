import axios from 'axios';
import httpService from '../service/http-service';

const login = async (username, password) => {
  await axios.post(httpService.url + '/user/authenticate', { username, password })
    .then(handleResponse)
    .then(user => {
      // login successful if there's a user in the response
      if (user) {
        // store user details and basic auth credentials in local storage 
        // to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
}

const logout = () => {
  localStorage.removeItem('user');
}

const handleResponse = (response) => {
  const data = response.data
  if (response.status === 200) {
    return data;
  } else {
    // auto logout if 401 response returned from api
    logout();
    // location.reload(true);
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
}

export const userService = { login, logout };
