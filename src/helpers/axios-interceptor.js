import axios from 'axios';

let _requests;
const loader = document.getElementById('loader-lds-grid');

const show = (element) => element.style.display = "flex";
const hide = (element) => element.style.display = "none";

axios.interceptors.request.use(async (request) => {
  if (!_requests) {
    show(loader)
  }

  _requests++;
  return Promise.resolve(request);
}, (error) => {
  return Promise.reject(error);
});


axios.interceptors.response.use((response) => {
  _requests--;

  if (!_requests) {
    hide(loader)
  }

  return Promise.resolve(response);
}, (error) => {
  return Promise.reject(error);
});
