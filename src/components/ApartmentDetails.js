import {useParams} from "react-router-dom"

function ApartmentDetails(props) {

    const { _id } = useParams();


    const filteredApartments = props.listOfAps.filter((apValue) => {
        console.log("Filter here")
        return apValue._id.includes(_id);
      });
    
      const apartment = filteredApartments[0];

    return(
        <div class="Card">
        <img src={apartment.img} width={"500px"}></img>

        <p><b>{apartment.title}</b></p>
        <p>{apartment.pricePerDay}</p>
        <p>{apartment._id}</p>
        <p>{apartment.createdAt}</p>
        <p>{apartment.updatedAt}</p>
        </div>
    );
    };
    
    
export default ApartmentDetails;