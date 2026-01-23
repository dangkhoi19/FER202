<<<<<<< HEAD
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ flex: 1, padding: 20 }}>
        Nội dung website
      </main>
      <Footer />
    </div>
  );
}
o
=======
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

>>>>>>> 60a1915 (cc)
export default App;
