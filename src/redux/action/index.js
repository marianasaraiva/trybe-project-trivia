export const LOGIN = 'LOGIN';
export const RESPONSE_TOKEN_API = 'RESPONSE_TOKEN_API';

export const loginAction = (payload) => ({ type: LOGIN, payload });
export const responseTokenAPI = (payload) => ({ type: RESPONSE_TOKEN_API, payload });
