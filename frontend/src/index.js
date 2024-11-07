import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import reportWebVitals from "./reportWebVitals";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Clients from "./Client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Features />
    <Clients />
    <Pricing />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
