/*
 * This reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 */
console.log('REDUCER: updateUser')
export const updateUserReducer = (state = [], action) => {
  switch (action.type) {
    case 'PUT_USER_REQUEST':
      return state;
    case 'PUT_USER_SUCCESS':
      //return action.payload.data;
      return action.payload;
    case 'PUT_USER_FAILURE':
      return state;
    default:
      return state;
  }
};
