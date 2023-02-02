import "./css/main.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Listings from "./pages/Listings";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <ToastContainer theme="dark" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Listings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
