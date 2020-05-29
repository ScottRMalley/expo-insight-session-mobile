import { SET_NAME } from '../actions/name.action';

const initialNameState = {
  name: '',
};

export default function nameReducer(prevState=initialNameState, action) {
  switch(action.type) {
    case SET_NAME:
      return {
        ...prevState,
        name: action.payload,
      }
    default:
      return { ...prevState };
  }
}