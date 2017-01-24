import * as types from './actionTypes';

export function dbOnloadActionCreator(data) {
  console.log('initial messages load');
  return {
    type: types.DB_ONLOAD,
    data
  }
}

export function chatMsgActionCreator(msg) {
  console.log('socket 💥');
  return {
    type: types.CHAT_MSG,
    msg
  }
}

export function sendMsgActionCreator(event) {
  console.log('msg 🚀');
  event.preventDefault(); // need this here.
  
  // don't really need to send any data here
  return {
    type: types.SEND_MSG,
    event
  }
}

export function handleChangeActionCreator(event) {
  console.log('letter:', event.target.value);
  return {
    type: types.HANDLE_CHANGE,
    letter: event.target.value
  }
}

