import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile({ name, email }) {
  return (
    <main className="profile">
      <section>
        <form className="profile-form">
          <h2 className="profile-form__title">Привет, {name}!</h2>
          <div className="profile-form__area profile-form__area_name">
            <label htmlFor="name" className="profile-form__label">
              Имя
            </label>
            <input
              id="name"
              type="text"
              name="name"
              // value={formValue.email}
              // onChange={handleChange}
              className="profile-form__input"
              placeholder={name}
            ></input>
          </div>
          <div className="profile-form__area profile-form__area_email">
            <label htmlFor="email" className="profile-form__label">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              // value={formValue.email}
              // onChange={handleChange}
              className="profile-form__input"
              placeholder={email}
            ></input>
          </div>
          <button type="submit" className="profile-form__submit">
            Редактировать
          </button>
          <NavLink to="/signup" className="profile-form__signout">
            Выйти из аккаунта
          </NavLink>
        </form>
      </section>
    </main>
  );
}
export default Profile;
