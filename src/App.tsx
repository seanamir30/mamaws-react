import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Item from "./pages/Item";
import AddItem from "./pages/AddItem";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
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
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
