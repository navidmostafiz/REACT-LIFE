import axios from 'axios';

export function getUserlist(callback) {
  return function (dispatch) {

    dispatch({ type: 'FETCH_ALL_USER_REQUEST', }); //dispatch

    axios.get('users')
      .then((response) => {

        dispatch({ type: 'FETCH_ALL_USER_SUCCESS', payload: response.data, }); //dispatch

        if (typeof callback === 'function') {
          callback(null, response.data);
        }
      })
      .catch((err) => {

        dispatch({ type: 'FETCH_ALL_USER_FAILURE', payload: err.response.data, }); //dispatch

        if (typeof callback === 'function') {
          callback(err.response.data);
        }
      }); //end of exios
  };




}
