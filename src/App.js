import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import Invoice from "./pages/Invoice";
import InvoiceList from "./pages/InvoiceList";
import ProductList from "./pages/ProductList";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <div style={{borderBottom:"1px solid #d0c7c7"}}>
        <Header/>
      </div>
      <div className="App mt-4 w-100">
        <Container>
          <Routes>
            <Route path="/" element={<InvoiceList />} />
            <Route path="/create" element={<Invoice />} />
            <Route path="/create/:id" element={<Invoice />} />
            <Route path="/edit/:id" element={<Invoice />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
};

export default App;
