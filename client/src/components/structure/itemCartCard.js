import React from 'react';

function Cartcard (props) {
    return (
        <div class="card mb-3" style={{"max-width": "540px"}}>
        <div class="row g-0">
            <div class="col-md-4">
            <img src={ props.image} class="img-fluid rounded-start" alt={props.title} />
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <span className="price">R$ {props.price.toFixed(2)}</span>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Cartcard;