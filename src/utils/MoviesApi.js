class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }



}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "content-type": "application/json",
    authorization: "e31129f1-5493-4dd7-bb19-51cc3d3b29e6",
  },
});

export default moviesApi;