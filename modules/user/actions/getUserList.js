import axios from 'axios';
const API_URL = "http://127.0.0.1:5000/api/";
axios.defaults.baseURL = API_URL;

console.log('users.actions.getuserList');

export function getUserlist(callback) {
  return function (dispatch) {

    dispatch({ type: 'FETCH_ALL_USER_REQUEST', }); //dispatch

    axios.get('users')
      .then((response) => {

        console.log('axios called>then(): ', response.data);
        var testData = {
          data: [
            {
              "id": 1,
              "userName": "navidmostafiz",
              "firstName": "Navid",
              "lastname": "Mostafiz"
            },
            {
              "id": 2,
              "userName": "mohaiminul",
              "firstName": "Mohaiminul",
              "lastname": "Islam"
            }
          ]
        };

        //dispatch({ type: 'FETCH_ALL_USER_SUCCESS', payload: response.data, }); //dispatch
        dispatch({ type: 'FETCH_ALL_USER_SUCCESS', payload: testData, }); //dispatch

        if (typeof callback === 'function') {
          //callback(null, response.data);
          callback(null, testData);
        }
      })
      .catch((error) => {

        console.log('exios called: failed', error);

        dispatch({ type: 'FETCH_ALL_USER_FAILURE', payload: error.response.data, }); //dispatch

        if (typeof callback === 'function') {
          callback(error.response.data);
        }
      }); //end of exios
  };




}
