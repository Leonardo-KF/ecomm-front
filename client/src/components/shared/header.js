import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline, IoExitOutline, IoCodeWorking, IoPersonOutline } from "react-icons/io5";
import Api from "../../api/api";

function Header() {
  const navigate = useNavigate();
  const { setToken, token } = useAuth();
  const [items, setItems] = useState();



  const [buttons, setButtons] = useState(
    <>
      <Link to={"/login"} className="header-link-button">
        Login
      </Link>
      <Link to={"/cadastro"} className="header-link-button">
        Cadastrar-se
      </Link>
    </>
  );

  const Cart = () => {
    navigate("/carrinho");
  };
  const loggout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");

  };

  const perfil = () => {
    navigate("/perfil");
  }

  useEffect(() => {
    if (token) {
      setButtons(
        <>
          <button className="btn-header" onClick={loggout}>
            <IoExitOutline size={35}/>
          </button>
          <button className="btn-header" onClick={Cart}>
          {items}
            <IoCartOutline size={35}/>
          </button>
          <button className="btn-header" onClick={perfil}>
            <IoPersonOutline size={35}/>
          </button>
        </>
      );
      Api.userCart().then((result) => {
        setItems(result.data.products.length);
      });
    }
  }, [token, items]);

  return (
    <nav className="navbar header-page">
      <Link to={"/"} className="header-logo">
        <IoCodeWorking size={40} />
        <h3 className="title-header">Code Store</h3>
      </Link>
      <div className="buttons-actions">{buttons}</div>
    </nav>
  );
}

export default Header;
