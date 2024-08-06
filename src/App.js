import './App.css';
import {Route, Routes} from "react-router-dom";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Home from "./components/Home";
import HotProduct from "./components/HotProduct";
import DetailProduct from "./components/DetailProduct";
import Category from "./components/Category";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/user" element={<User/>}>
          <Route path="" element={<Home/>}/>
          <Route path="hot-product" element={<HotProduct/>}/>
          <Route path="detail-product" element={<DetailProduct/>}/>
          <Route path="category" element={<Category/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
