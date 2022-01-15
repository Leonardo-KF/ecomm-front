import React, { useState, useEffect }from "react";
import Api from "../api/api"


function Perfil() {

    const [ user, setUser ] = useState();

    useEffect(() => {
        Api.authLogged().then((result) => {
            setUser(result.data);
        })
    },[])

    if (user) { 
        return (
            <div className="container">
                <div className="box-user-content" >
                    <h3>Seus dados: </h3>
                    <img className="perfil-image" src={user.imageURL} alt="foto usuario" />
                    <h2>{user.name}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.birthdate}</h2>
                </div>
            </div>
        )
    } else { return null; }
}

export default Perfil;