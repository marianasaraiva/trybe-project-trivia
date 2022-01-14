export const setLocalStorage = (key, token) => localStorage.setItem(key, token);
// setItem(chave, value) => adiciona um item
export const getLocalStorage = () => localStorage.getItem('token');
// getItem(nomeDaChave) => retorna o valor da chave
