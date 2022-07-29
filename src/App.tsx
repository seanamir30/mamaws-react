import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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
import Protected from "./components/Protected";
import axios from "axios";
import { setCartItems } from './features/cart/cartSlice';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { cart } from "./pages/Cart";

function App() {
  const { user } = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/carts`,{
      headers: {
        Authorization: user.token
      }
    })
    .then(res=>{
      dispatch(setCartItems(res.data))
    })
  }, [])
  

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/add-item"element={<Protected mode={'admin'}><AddItem /></Protected>} />
        <Route path="/items/:itemId" element={<Item/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Protected mode={'user'}><Profile/></Protected>} />
        <Route path="/cart" element={<Protected mode={'user'}><Cart/></Protected>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
