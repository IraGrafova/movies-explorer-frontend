export const baseUrl = "http://localhost:3000";

export const register = (data) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data), //"password": "somepassword", "email": "email@yandex.ru"
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка");
  });
};

export const login = (data) => {
  return fetch(`${baseUrl}/signin`, {
    credentials: 'include',
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data), //"password": "somepassword", "email": "email@yandex.ru"
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка");
  });
};


export const jwt = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    credentials: 'include',
    headers: {
      "content-type": "application/json",
     // Authorization: `Bearer ${token}`,
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
    credentials: 'include',
    method: "GET",
    headers: {
      "content-type": "application/json",
     // Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка получения данных пользователя");
  });
}