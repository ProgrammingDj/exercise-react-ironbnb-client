import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';
import {Routes, Route, Navlink} from "react-router-dom"
import axios from "axios";


function App() {
  return (
<div className="App">
  <Navbar>
    <Navlink to="/">Home</Navlink>
    <Navlink to="/">Apartments</Navlink>
    <Navlink to="/">Details</Navlink>
    <Navlink to="/">List</Navlink>
  </Navbar>

  <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/apartments" element={<ApartmentsList/>}/>
  <Route path="/apartments/:id" element={<ApartmentsDetails/>}/>
  <Route path="/apartments/create" element={<CreateApartment/>}/>
  </Routes>
  
</div>
  );
}

export default App;
