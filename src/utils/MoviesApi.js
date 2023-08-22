// export const baseUrl = "http://localhost:3000";

// const moviesApi = new MoviesApi({
//   url: "https://api.nomoreparties.co/beatfilm-movies",
//   headers: {
//     "content-type": "application/json",
//     authorization: "e31129f1-5493-4dd7-bb19-51cc3d3b29e6",
//   },
// });

export const getMovies = () => {
  return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
    // credentials: 'include',
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
}

