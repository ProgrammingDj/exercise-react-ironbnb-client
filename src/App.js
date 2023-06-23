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

const renderList = () => {
  if (appArray === null) {
    return <p>loading...</p>
  } else {
    return appArray.map((apValue)=> {
      console.log(apValue)
      return (
      <div key={apValue.id} className="box">
        Name: {apValue.title} <br/>
        Image: <img src={apValue.img} alt={apValue.title}></img>
        Cost per Night: {apValue.pricePerDay}
      </div>
      )
    })
  }
}

  return (
<div className="App">
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/apartments">Apartments</NavLink>
    <NavLink to="/apartments/create">Create</NavLink>
  </nav>

  <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/apartments" element={renderList()} />
  <Route path="/apartments/:id" element={<ApartmentDetails/>}/>
  <Route path="/apartments/create" element={<CreateApartment/>}/>
  </Routes>
  
</div>
  );
}

export default App;
