import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../api/api";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Produto() {
  const navigate = useNavigate();

  const { setToken } = useAuth();

  const [produto, setProduto] = useState();
  const [mount, setMount] = useState(false);
  const { id } = useParams();

  async function getProduct() {
      console.log("rodou")
    await Api.productFindOne(id).then((result) => {
        console.log(result)
      setProduto(result.data);
    });
  }

  useEffect(() => {
    setMount(true);
    console.log("rodou")
    getProduct();
  }, [mount]);

  console.log(mount)

  const AddCart = async () => {
   await Api.userAddCart(produto.id)
      .then(() => {
        console.log("Produto adcionado ao carrinho");
        setToken(localStorage.getItem("token"));
        navigate("/carrinho");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  if (produto) {
  return (
    <div className="container">
      <div className="box-produto-solo">
        <div className="product-image">
          <img className="imagem-produto" src={produto.imageURL} alt={produto.name} />
        </div>
        <div className="box-dados-produto">
          <h3>{produto.name}</h3>
          <h4>{produto.description}</h4>
          <div className="box-comprar">
          <span className="price">R$ {produto.price.toFixed(2)}</span>
          <button onClick={AddCart} className="btn-comprar">
            Comprar
          </button>
        </div>
        </div>
      </div>
    </div>
  ); } else { return null}
}

export default Produto;
