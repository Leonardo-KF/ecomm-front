import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import Api from "../api/api";

function Login() {

  const { setToken } = useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const login = {
      email: email,
      password: password,
    };

    Api.authLogin(login).then((response) => {
      localStorage.setItem("token", response.data.token);
      setToken(localStorage.getItem("token"));
      navigate("/");
    });
  };

  return (
    <div className="container">
      <div className="box-login">
        <h3>Login</h3>

        <form className="form-login" onSubmit={handleSubmit}>
          <input
            className="input-forms"
            type="text"
            placeholder="Endereço de e-mail"
            required
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className="input-forms"
            type="password"
            placeholder="Senha"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          <input className="input-forms" type="submit" value="Fazer login" />
        </form>
        <span>Ainda não possui conta?</span>
        <Link to={"/cadastro"}>Cadastre-se</Link>
      </div>
    </div>
  );
}

export default Login;
