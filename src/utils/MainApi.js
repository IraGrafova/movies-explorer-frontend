export const baseUrl = "http://localhost:3000";

export const register = (data) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  });
};

export const login = (data) => {
  return fetch(`${baseUrl}/signin`, {
    credentials: "include",
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  });
};

export const jwt = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка авторизации");
  });
};

export const getUserInfo = () => {
  return fetch(`${baseUrl}/users/me`, {
    credentials: "include",
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка получения данных пользователя");
  });
};

export const changeUserInfo = (user) => {
  return fetch(`${baseUrl}/users/me`, {
    credentials: "include",
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  });
};

export const getMovies = () => {
  return fetch(`${baseUrl}/movies`, {
    credentials: "include",
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка получения сохраненных фильмов");
  });
};

export const saveMovies = (card) => {
  // console.log(card)
  return fetch(`${baseUrl}/movies`, {
    credentials: "include",
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(card),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка сохранения фильма");
  });
};

export const deleteMovies = (id) => {
  console.log(id);
  return fetch(`${baseUrl}/movies/${id}`, {
    credentials: "include",
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка удаления фильма");
  });
};

export const logout = () => {
  return fetch(`${baseUrl}/signout`, {
    credentials: "include",
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка выхода");
  });
};
