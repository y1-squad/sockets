import React from "react";
import useForm from "./useForm";


const Form = () => {
    const { values, handleChange, handleSubmit } = useForm();


function login() {
  console.log(values);
}

  return (
    <div className="container">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="username" name="username" onChange={handleChange} value={values.username} required  />
          </div>
          <button type="submit" className="button">
            Login
          </button> 
        </form>
      </div>
    </div>
  );
};

export default Form;
