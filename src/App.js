import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";



function App() {
  return (
   <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cars" element={<Cars/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cars/:id" element={<CarDetails />} />

      </Routes>

      <Footer/>
   
   
   
   
   </>
  );
}

export default App;
