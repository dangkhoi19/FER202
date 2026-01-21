import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import HeroCarousel from './components/HeroCarousel';
import PizzaList from './components/PizzaList';
import Footer from './components/Footer';

function App() {
  const myProfile = {
    avatar: '/images/ltb.jpg',
    name: 'Tra LTB',
    email: 'traltb@fe.edu.vn'
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <Container>
          <a className="navbar-brand fw-bold" href="/">
            🍕 Pizza Delicious
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" href="/">Trang chủ</a>
              <a className="nav-link" href="/menu">Thực đơn</a>
              <a className="nav-link" href="/about">Giới thiệu</a>
              <a className="nav-link" href="/contact">Liên hệ</a>
            </div>
          </div>
        </Container>
      </nav>

      {/* Carousel Banner */}
      <HeroCarousel />

      {/* Main Content */}
      <Container className="flex-grow-1 py-5">
        {/* Introduction */}
        <div className="text-center mb-5">
          <h1 className="text-danger">Chào mừng đến với Pizza Delicious!</h1>
          <p className="lead">Pizza ngon nhất với nguyên liệu tươi ngon, đảm bảo bạn sẽ hài lòng</p>
        </div>

        {/* Pizza List */}
        <PizzaList />

        {/* Promotion Section */}
        <div className="bg-light p-5 rounded-3 my-5">
          <h3 className="text-center text-danger mb-3">🔥 Khuyến mãi đặc biệt</h3>
          <p className="text-center">Đặt 2 pizza lớn được tặng 1 pizza nhỏ. Giao hàng miễn phí trong bán kính 5km!</p>
        </div>
      </Container>

      {/* Footer */}
      <Footer myProfile={myProfile} />
    </div>
  );
}

export default App;