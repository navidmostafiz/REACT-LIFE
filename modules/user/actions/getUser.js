import axios from 'axios';
const API_URL = "http://127.0.0.1:5000/api/";
axios.defaults.baseURL = API_URL;
console.log('ACTION: user.getUser()');

export function getUser(userId, callback) {
  return function (dispatch) {

    console.log('ACTION CALLED: user.getUser():userId=' + userId);
    dispatch({ type: 'FETCH_USER_REQUEST', }); //dispatch

    axios.get('users/' + userId)
      .then((response) => {
        console.log('axios.getUser called>then(): ', response.data);
        dispatch({ type: 'FETCH_USER_SUCCESS', payload: response.data, }); //dispatch

        if (typeof callback === 'function') {
          callback(null, response.data);
        }
      })
      .catch((error) => {
        console.log('exios called: failed', error.response.data);
        dispatch({ type: 'FETCH_USER_FAILURE', payload: error.response.data, }); //dispatch

        if (typeof callback === 'function') {
          callback(error.response.data);
        }
      });
  };
}
