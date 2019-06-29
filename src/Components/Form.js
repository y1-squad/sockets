import React from "react";
import UserForm from "./UserForm";

const Form = () => {
  const { values, handleChange, handleSubmit } = UserForm(login);

  function login() {
    console.log(values);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label className="label">Username</label>
        <input
          className="input"
          type="username"
          name="username"
          onChange={handleChange}
          value={values.email}
          required
        />
          <button type="submit" className="button">
            Login
          </button>
      </form>
    </div>
  );
};

export default Form;
