import React, { useState } from "react";
import axios from "axios";
import Input from "../Components/Input";

const SignUp = (props) => {
  const [form, setForm] = useState({
    username: null,
    displayName: null,
    email: null,
    password: null,
    passwordRepeat: null,
  });
  const { visible, setIsVisible } = props;
  console.log(visible);
  const [errors, setErrors] = useState({});
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setForm((previousForm) => {
      return {
        ...previousForm,
        [name]: value,
      };
    });
  };
  const onClickSignUp = async (e) => {
    e.preventDefault();
    const { username, email, password, displayName } = form;
    const body = {
      username,
      email,
      password,
      displayName,
    };

    try {
      await axios.post("/api/users", body);
    } catch (error) {
      setErrors(error.response.data);
    }
  };
  const onClickClose = () => {
    const { history } = props;
    const { push } = history;
    push("/");
    setIsVisible(false);
  };
  let className = "modal fade";
  if (visible) {
    className += " show d-block";
  }

  return (
    <div className="container">
      <div className={className}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title ">Sign Up</h3>
              <button className="close" onClick={onClickClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <Input
                  label="Username"
                  name="username"
                  onChange={onChangeInput}
                  type="text"
                />
                <div className="form-group">
                  <label>Display Name</label>
                  <input
                    className="form-control"
                    name="displayName"
                    onChange={onChangeInput}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    name="email"
                    onChange={onChangeInput}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    className="form-control"
                    name="password"
                    onChange={onChangeInput}
                    type="password"
                  />
                </div>
                <div>
                  <label>Password Repeat</label>
                  <input
                    className="form-control"
                    name="passwordRepeat"
                    onChange={onChangeInput}
                    type="password"
                  />
                </div>
                <div className="text-center mt-3">
                  <button
                    className="btn btn-primary btn-lg "
                    onClick={onClickSignUp}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
