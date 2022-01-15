import React, { useState } from "react";
import Api from "../api/api";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [birthdate, setBirthdate] = useState();
  const [image, setImage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirm,
      birthdate: birthdate,
      imageURL: image,
    };

    Api.userRegister(user).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="container">
      <div className="box-cadastro">
        <h3>Cadastre-se</h3>
        <form className="form-cadastro" onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            className="input-forms"
            type="text"
            required
            onChange={(event) => setName(event.target.value)}
          />
          <label>Email</label>
          <input
            className="input-forms"
            type="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Data de Nascimento</label>
          <input
            className="input-forms"
            type="text"
            required
            onChange={(event) => setBirthdate(event.target.value)}
          />
          <label>Imagem de Perfil</label>
          <input
            className="input-forms"
            type="text"
            required
            onChange={(event) => setImage(event.target.value)}
          />
          <label>Senha</label>
          <input
            className="input-forms"
            type="password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          <label>Confirme a senha</label>
          <input
            className="input-forms"
            type="password"
            required
            onChange={(event) => setPasswordConfirm(event.target.value)}
          />
          <div className="botão-submit-form">
            
              <input className="input-forms" type="submit" value="Cadastrar" />
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
