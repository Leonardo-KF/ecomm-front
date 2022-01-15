import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import axios from "axios";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Home from "./pages/home";
import Produto from "./pages/produto";
import Cart from "./pages/cart";
import Perfil from "./pages/perfil";


axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  
  const { token } = useAuth();

  const [update, setUpdate] = useState();

  console.log("renderizando");

  useEffect(() => {
    if (token) {
      setUpdate(false)
    } else { 
      setUpdate(true)
    }
    console.log("rodou useeffect");
    
  },[token, update])

  const IsAuthenticated = (Component) => {
    if (token) {
      return Component;
    } else {
      return <Login />;
    }
  };

  

  return (
    <> 
      <Header/>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={IsAuthenticated(<Produto />)} />
        <Route path="/carrinho" element={IsAuthenticated(<Cart />)} />
        <Route path="/perfil" element={IsAuthenticated(<Perfil />)} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
