import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Component1 from "./Paginas/Context";
import "./index.css";
// EJEMPLOS ADICIONALES
import { Services } from './Paginas/Services';
import About from './Paginas/About';
import { ServiceNetwork } from './Paginas/ServiceNetwork';
import { ServiceMaintenance } from './Paginas/ServiceMaintenance';

function App() {
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
          <Route path='services' element={<Services />} >
            <Route path='maintenance' element={<ServiceMaintenance />} />
            <Route path='network' element={<ServiceNetwork />} />
          </Route>
          <Route path='about' element={<About />} />
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

export default App;