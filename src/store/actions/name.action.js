export const SET_NAME = 'SET_NAME';

export function setName(name) {
  return dispatch => {
    dispatch({type: SET_NAME, payload: name});
  };
}