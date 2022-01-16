// import { fetchAPI } from '../../services/servicesFetchAPI';

export const LOGIN = 'LOGIN';
export const RESPONSE_TOKEN_API = 'RESPONSE_TOKEN_API';
export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';

export const loginAction = (payload) => ({ type: LOGIN, payload });
export const responseTokenAPI = (payload) => ({ type: RESPONSE_TOKEN_API, payload });

export const requestAPI = (payload) => ({ type: REQUEST_API, payload });
export const responseAPI = (payload) => ({ type: REQUEST_API, payload });

// export const fetchAPIThunk = (token) => (dispatch) => {
//   dispatch(requestAPI);
//   fetchAPI(token)
//     .then((data) => {
//       dispatch(responseAPI(data));
//     });
// };
