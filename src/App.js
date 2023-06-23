import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';
import {Routes, Route, NavLink} from "react-router-dom";
import axios from "axios";
import HomePage from "./components/HomePage";
import CreateApartment from "./components/CreateApartment";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import { useEffect, useState } from "react";

function App() {
  
const [appArray, setAppArray] = useState();

const baseURL= "https://ironbnb-m3.herokuapp.com/apartments";

useEffect(() => {
  getApartmentAPI();
},[]);

const getApartmentAPI = () => {
axios.get(`${baseURL}`)
  .then(response => {
    setAppArray(response.data)})
  .catch(e => console.log(e));
};


  return (
<div className="App">
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/apartments">Apartments</NavLink>
    <NavLink to="/apartments/create">Create</NavLink>
  </nav>

  <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/apartments" element={<ApartmentsList listOfAps={appArray}/>} />
  <Route path="/apartments/:_id" element={<ApartmentDetails listOfAps={appArray}/>}/>
  <Route path="/apartments/create" element={<CreateApartment/>}/>
  </Routes>
  
</div>
  );
}

export default App;