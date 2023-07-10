import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Sections/Home'
import Navbar from './Components/Sections/Navbar'
import Footer from './Components/Sections/Footer';
import NotFound from './Pages/404'
import Car from './Pages/Car'
import Event from './Pages/Event'
import Homestays from './Pages/Homestays'
import Tour from './Pages/Tour'
import Hotel from "./Pages/Hotel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route exact path="/hotels" element={<Hotel />} ></Route>
        <Route exact path="/car" element={<Car />} ></Route>
        <Route exact path="/event" element={<Event />} ></Route>
        <Route exact path="/homestays" element={<Homestays />} ></Route>
        <Route exact path="/tour" element={<Tour />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
