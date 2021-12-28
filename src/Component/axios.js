import axios from 'axios'


const instance = axios.create({
    // THE API (cloud function) URL
       baseURL: 'http://localhost:5001/e-challenge-84892/us-central1/api'
      // Api key
  });
  
  export default instance;
  