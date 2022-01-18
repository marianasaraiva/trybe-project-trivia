import { LOGIN, POINTS_PLAYER, ASSERTIONS_PLAYER } from '../action';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
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
  case ASSERTIONS_PLAYER:
    return {
      ...state,
      assertions: state.assertions + action.payload,
    };
  default:
    return state;
  }
};

export default player;
