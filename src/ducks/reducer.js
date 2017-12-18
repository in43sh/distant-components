const LOGGED_IN = "LOGGED_IN";
const IS_CREDIT_CARD_HOLDER = "IS_CREDIT_CARD_HOLDER";

const initialState = {
  loggedInAs: '',
  isCreditCardHolder: false
}

export function logInAs(name) {
  return {
    type: LOGGED_IN,
    payload: name
  }
}

export function setIsCreditCardHolder() {
  return {
    type: IS_CREDIT_CARD_HOLDER
  }
}


export default (state = initialState, action) => {
  switch(action.type) {
    case LOGGED_IN:
      return {...state, loggedInAs: action.payload}
    case IS_CREDIT_CARD_HOLDER:
      return {...state, isCreditCardHolder: true}
    default:
      return state
  }
}