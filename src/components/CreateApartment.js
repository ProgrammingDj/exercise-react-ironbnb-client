import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateApartment() {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const navigate = useNavigate();


  
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post('https://ironbnb-m3.herokuapp.com/apartments', {
        img,
        title,
        pricePerDay: Number(pricePerDay),
      });
      console.log(response.data);
      navigate('/apartments');
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div>
      <h1>Create Apartment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="img">Image URL:</label>
          <input type="text" id="img" value={img} onChange={(event) => setImg(event.target.value)} />
        </div>



        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div>
          <label htmlFor="pricePerDay">Price per day:</label>
          <input type="number" id="pricePerDay" value={pricePerDay} onChange={(event) => setPricePerDay(event.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateApartment;