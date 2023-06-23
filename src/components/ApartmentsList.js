import { Link
 } from "react-router-dom"
function ApartmentList(props) {
    console.log(props.listOfAps)

        

    if (props.listOfAps === undefined || props.listOfAps === null) {
      return <p>loading...</p>
    } else {
      return props.listOfAps.map((apValue)=> {
        console.log("This is it:" + apValue)
        return (
        <div key={apValue.id} className="box">
          Name: {apValue.title} <br/>
          Image: <img src={apValue.img} alt={apValue.title}></img>
          Cost per Night: {apValue.pricePerDay}
          <Link to={`/apartments/${apValue._id}`}>More Details</Link>
        
        </div>
        )
      })
    }
  }


export default ApartmentList;