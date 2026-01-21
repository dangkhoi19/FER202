import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <a className="navbar-brand" href="/">
            🍕 Pizza Delicious
          </a>
        </div>
      </nav>
      
      <div className="container mt-4">
        <h1 className="text-center">Welcome to Pizza Delicious</h1>
        <p className="text-center">The best pizza in town!</p>
        
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Margherita Pizza</h5>
                <p className="card-text">Classic cheese and tomato pizza.</p>
                <p className="text-danger">$9.99</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pepperoni Pizza</h5>
                <p className="card-text">Spicy pepperoni with extra cheese.</p>
                <p className="text-danger">$11.99</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Hawaiian Pizza</h5>
                <p className="card-text">Ham and pineapple combination.</p>
                <p className="text-danger">$10.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>© 2024 Pizza Delicious - FER202 Project</p>
      </footer>
    </div>
  );
}

export default App;
