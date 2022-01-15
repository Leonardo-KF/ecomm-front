import React, { useState, useEffect } from "react";
import Api from "../api/api";
import Card from "../components/structure/card";
import { Link } from "react-router-dom"

function Home() {
  const [mount, setMount] = useState(false);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    if (!mount) {
      Api.productFindAll().then((result) => {
        setProdutos(result.data);
      });
      setMount(true);
    }
  }, [mount]);

  
  return (
    <div className="container">
      <div className="box-produtos-home">
        {produtos.map((produto) => {
          return (
            <Link className="box-produtos-link" key={produto.id} to={"/produto/" + produto.id}>
            <Card
              id={produto.id}
              image={produto.imageURL}
              title={produto.name}
              price={produto.price}
            />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
