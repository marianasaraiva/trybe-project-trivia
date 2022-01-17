import { LOGIN, POINTS_PLAYER } from '../action';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    };
  case POINTS_PLAYER:
    return {
      ...state,
      score: state.score + action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
