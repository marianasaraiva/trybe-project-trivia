export const fetchToken = () => fetch('https://opentdb.com/api_token.php?command=request')
  .then((response) => response.json())
  .then((data) => data.token);

export const fetchAPI = (token) => fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
  .then((response) => response.json())
  .then((data) => data.results);

// https://opentdb.com/api.php?amount=5&token=c55f9ee1436ed5562b2f46ad92ab974240cbe223d5602284a1dc968e32120ab9
