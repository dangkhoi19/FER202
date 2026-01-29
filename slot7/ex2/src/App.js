import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Ex1Quantity from './components/Ex1Quantity';
import Ex2OrderModal from './components/Ex2OrderModal';
import Ex3ProductForm from './components/Ex3ProductForm';
import Ex4TodoList from './components/Ex4TodoList';

function App() {
  return (
    <Router>
      <NavBar />

      <div className="container mt-4">
        <Routes>
          <Route path="/ex1" element={<Ex1Quantity />} />
          <Route path="/ex2" element={<Ex2OrderModal />} />
          <Route path="/ex3" element={<Ex3ProductForm />} />
          <Route path="/ex4" element={<Ex4TodoList />} />

          {/* Trang mặc định */}
          <Route path="/" element={<Ex1Quantity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
