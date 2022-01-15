import axios from "axios";

const config = (token) => {
  return {
    headers: { Authorization: "Bearer " + token },
  };
};
const api = {
  // functions for operations of the user
  userRegister: async (user) => {
    // function for register a new user
    return await axios.post("user/register", user);
  },

  userAddCart: async (id) => {
    // function for add a product to cart
    return await axios.patch(
      "user/addcart/" + id,
      "",
      config(localStorage.getItem("token"))
    );
  },

  userCart: async () => {
    // function for view products in the cart
    return await axios.get("user/cart", config(localStorage.getItem("token")));
  },

  userUpdate: async (user) => {
    // function for update user infos
    return await axios.patch(
      "user/update",
      user,
      config(localStorage.getItem("token"))
    );
  },

  userDelete: async () => {
    // function for delete user
    return await axios.delete(
      "user/delete",
      config(localStorage.getItem("token"))
    );
  },

  // functions for operations of the products

  productCreate: async (product) => {
    // function for create a new product
    return await axios.post("product/create", product);
  },

  productFindAll: async () => {
    // function for find all products
    return await axios.get("product");
  },

  productFindOne: async (id) => {
    // function for find one product by id
    return await axios.get("product/find/" + id);
  },

  productUpdate: async (id, product) => {
    // function for update product by id
    return await axios.patch("product/find/" + id, product);
  },

  productDelete: async (id) => {
    // function for delete a product by id
    return await axios.delete("product/delete/" + id);
  },

  // functions for authentication users

  authLogin: async (user) => {
    // function for login user
    return await axios.post("auth/login", user);
  },

  authLogged: async () => {
    // function that checks if the user is already logged in
    return await axios.get(
      "auth/profile",
      config(localStorage.getItem("token"))
    );
  },
};

export default api;
