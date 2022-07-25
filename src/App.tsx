import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Item from "./pages/Item";
import AddItem from "./pages/AddItem";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/items/:itemId" element={<Item/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
