import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Layout from "./Paginas/Layout";
import Home from "./Paginas/Home";
import Blogs from "./Paginas/Blogs";
import Contact from "./Paginas/Contact";
import NoPage from "./Paginas/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routers>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
