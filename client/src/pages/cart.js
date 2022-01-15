import React, { useState, useEffect } from "react";
import Api from "../api/api";
import ItemCartCard from "../components/structure/itemCartCard";

function Cart() {
  const [mount, setMount] = useState(false);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    if (!mount) {
      Api.userCart().then((result) => {
        setProdutos(result.data.products);
      });

      setMount(true);
    }
  }, [mount]);


  if (produtos.length === 0) {
    return (
      <div className="container">
        <div className="box-cart-items">
          <h3>Você ainda não adicionou produtos ao carrinho</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="box-cart-items">
          {produtos.map((produto) => {
            return (
              <ItemCartCard
                image={produto.imageURL}
                title={produto.name}
                price={produto.price}
                key={produto.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cart;
