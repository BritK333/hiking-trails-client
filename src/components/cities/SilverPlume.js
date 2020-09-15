import React from "react"
import {Link} from "react-router-dom"
import { gql, useQuery } from "@apollo/client"

const SILVER_PLUME_TRAILS = gql`
   query SilverPlumeList($city: String) {
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

function SilverPlume() {
   const { loading, error, data } = useQuery(SILVER_PLUME_TRAILS, {
      variables: {city: "Silver Plume"}
   })

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error :(</p>;
   if (!data) return <p>Not data</p>

   return(
      <div className="sPlume-pg">
         <Link to="/search-by-city" className="link">
            <button className="back-btn">BACK</button>
         </Link>

         <h1 className="sPlume-title">Silver Plume</h1>

         {data.trailsByCity.map(({ id, name, city, location, difficulty, length, time }) => (
            <div key={id} className="sPlume-list-section">
               <li className="sPlume-list-item">
                  <p className="sPlume-content-item">
                     Name: <span>{name}</span>
                  </p>
                  <p className="sPlume-content-item">
                     City: <span>{city}</span>
                  </p>
                  <p className="sPlume-content-item">
                     Location: <span>{location}</span>
                  </p>
                  <p className="sPlume-content-item">
                     Difficulty: <span>{difficulty}</span>
                  </p>
                  <p className="sPlume-content-item">
                     Length: <span>{length}</span>
                  </p>
                  <p className="sPlume-content-item">
                     Time: <span>{time}</span>
                  </p>
               </li>
            </div>
            ))
         }
      </div>
   )
}

export default SilverPlume