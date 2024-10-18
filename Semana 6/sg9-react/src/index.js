import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Paginas/Layout";
import Home from "./Paginas/Home";
import Blogs from "./Paginas/Blogs";
import Contact from "./Paginas/Contact";
import NoPage from "./Paginas/NoPage";
import { Products } from './Paginas/Products';
import { FeaturedProducts } from './Paginas/FeaturedProducts';
import { NewProducts } from './Paginas/NewProducts';
import { Users } from './Paginas/Users';
import { Userdetails } from "./Paginas/UserDetails";
import { Admin } from "./Paginas/Admin";
import Component1  from "./Paginas/Context";
import "./index.css";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />}>
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<Userdetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="context" element={<Component1 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);