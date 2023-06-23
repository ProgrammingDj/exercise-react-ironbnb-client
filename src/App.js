import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';
import {Routes, Route, NavLink} from "react-router-dom";
import axios from "axios";
import HomePage from "./components/HomePage";
import CreateApartment from "./components/CreateApartment";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";

function App() {
  return (
<div className="App">
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/apartments">Apartments</NavLink>
    <NavLink to="/apartments/create">Create</NavLink>
  </nav>

  <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/apartments" element={<ApartmentsList/>}/>
  <Route path="/apartments/:id" element={<ApartmentDetails/>}/>
  <Route path="/apartments/create" element={<CreateApartment/>}/>
  </Routes>
  
</div>
  );
}

export default App;
