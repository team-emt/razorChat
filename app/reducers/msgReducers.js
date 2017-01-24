import * as types from './../actions/actionTypes';
import { rz } from '../containers/App';

const initialState = {
  messages: [],
  inputValue: ''
};

function msgReducers(state = initialState, action) {
  switch (action.type) {

    case types.DB_ONLOAD:
      const msgArray = action.data.reverse();
      return Object.assign({}, state, {
        messages: msgArray,
        inputValue: ''
      });

    case types.CHAT_MSG:
    return {
      messages: [action.msg, ...state.messages],
      inputValue: state.inputValue
    };
    
    case types.SEND_MSG:
      rz.publish(state.inputValue, 'write', 'chatMsg');
      return {
        messages: [...state.messages],
        inputValue: ''
      };
  
    case types.HANDLE_CHANGE:
      return {
        messages: [...state.messages],
        inputValue: action.letter
      };
  
    default:
      return state;
  }
}

export default msgReducers;
