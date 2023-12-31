export const getMovies = () => {
  return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ничего не найдено");
  });
};
