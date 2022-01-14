import { RESPONSE_TOKEN_API } from '../action';

const INITIAL_STATE = '';

function tokenReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RESPONSE_TOKEN_API:
    return action.payload;
  default:
    return state;
  }
}

export default tokenReducer;
