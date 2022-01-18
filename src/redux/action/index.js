export const LOGIN = 'LOGIN';
export const RESPONSE_TOKEN_API = 'RESPONSE_TOKEN_API';
export const POINTS_PLAYER = 'POINTS_PLAYER';
export const ASSERTIONS_PLAYER = 'ASSERTIONS_PLAYER';

export const loginAction = (payload) => ({ type: LOGIN, payload });
export const responseTokenAPI = (payload) => ({ type: RESPONSE_TOKEN_API, payload });
export const pointsPlayer = (payload) => ({ type: POINTS_PLAYER, payload });
export const assertionsPlayer = (payload) => ({ type: ASSERTIONS_PLAYER, payload });
