import React from "react";

function Card(props) {
  return (
    <div className="card product-card" style={{"width": "18rem"}}>
      <img src={props.image} className="card-img-top card-image" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
      </div>
      <div className="price-card">
          <span className="price">R$ {props.price.toFixed(2)}</span>
      </div>
    </div>
  );
}


export default Card;