import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Shop from './pages/Shop';
import Journal from "./pages/Journal";
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from "./components/Layout";
import ProductDetails from "./pages/ProductDetails";
import 'flowbite';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/Shop" element={<Shop/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/Journal" element={<Journal/>}></Route>
     <Route path="/shop/:id" element={<ProductDetails/>}></Route>
     <Route path="/Cart" element={<Cart/>}></Route>
    <Route path="/Checkout" element={<Checkout/>}></Route>

  </Route>
))
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
