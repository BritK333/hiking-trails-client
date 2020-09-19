import React from "react"
import {Link} from "react-router-dom"
import CircularProgress from '@material-ui/core/CircularProgress'
import { gql, useQuery } from "@apollo/client"

const ESTES_PARK_TRAILS = gql`
   query EstesParkList($city: String) {
      trailsByCity(city: $city) {
         id
         name
         city
         location
         difficulty
         length
         time
      }
   }
`

function EstesPark() {
   const { loading, error, data } = useQuery(ESTES_PARK_TRAILS, {
      variables: {city: "Estes Park"}
   })

   if (loading) return <CircularProgress />;
   if (error) return <p>Error :(</p>;
   if (!data) return <p>Not data</p>

   return(
      <div className="ePark-pg">
         <Link to="/search-by-city" className="link">
            <button className="back-btn">BACK</button>
         </Link>

         <h1 className="ePark-title">Estes Park</h1>

         {data.trailsByCity.map(({ id, name, city, location, difficulty, length, time }) => (
            <div key={id} className="ePark-list-section">
               <li className="ePark-list-item">
                  <p className="ePark-content-item">
                     Name: <span>{name}</span>
                  </p>
                  <p className="ePark-content-item">
                     City: <span>{city}</span>
                  </p>
                  <p className="ePark-content-item">
                     Location: <span>{location}</span>
                  </p>
                  <p className="ePark-content-item">
                     Difficulty: <span>{difficulty}</span>
                  </p>
                  <p className="ePark-content-item">
                     Length: <span>{length}</span>
                  </p>
                  <p className="ePark-content-item">
                     Time: <span>{time}</span>
                  </p>
               </li>
            </div>
            ))
         }
      </div>
   )
}

export default EstesPark