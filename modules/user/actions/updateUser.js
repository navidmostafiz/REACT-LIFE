import axios from 'axios';
const API_URL = "http://127.0.0.1:5000/api/";
axios.defaults.baseURL = API_URL;
console.log('ACTION: user.updateUser()');

export function updateUser(user_id, user, callback) {
  return function (dispatch) {

    console.log('ACTION CALLED: user.updateUser()');
    dispatch({ type: 'PUT_USER_REQUEST', }); //dispatch

    axios.put('users/' + user_id, user)
      .then((response) => {
        console.log('AXIOS DONE: ', response.data);
        dispatch({ type: 'PUT_USER_SUCCESS', payload: response.data, }); //dispatch

        if (typeof callback === 'function') {
          callback(null, response.data);
        }
      })
      .catch((error) => {
        console.log('AXIOS FAIL: ', error.response.data);
        dispatch({ type: 'PUT_USER_FAILURE', payload: error.response.data, }); //dispatch

        if (typeof callback === 'function') {
          callback(error.response.data);
        }
      });
  };
}
