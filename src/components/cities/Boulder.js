import React from "react"
import {Link} from "react-router-dom"
import { gql, useQuery } from "@apollo/client"

const BOULDER_TRAILS = gql`
   query BoulderList($city: String) {
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

function Boulder() {
   const { loading, error, data } = useQuery(BOULDER_TRAILS, {
      variables: {city: "Boulder"}
   })

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error :(</p>;
   if (!data) return <p>Not data</p>

   return(
      <div className="boulder-pg">
         <Link to="/search-by-city" className="link">
            <button className="back-btn">BACK</button>
         </Link>

         <h1 className="boulder-title">Boulder</h1>

         {data.trailsByCity.map(({ id, name, city, location, difficulty, length, time }) => (
            <div key={id} className="boulder-list-section">
               <li className="boulder-list-item">
                  <p className="boulder-content-item">
                     Name: <span>{name}</span>
                  </p>
                  <p className="boulder-content-item">
                     City: <span>{city}</span>
                  </p>
                  <p className="boulder-content-item">
                     Location: <span>{location}</span>
                  </p>
                  <p className="boulder-content-item">
                     Difficulty: <span>{difficulty}</span>
                  </p>
                  <p className="boulder-content-item">
                     Length: <span>{length}</span>
                  </p>
                  <p className="boulder-content-item">
                     Time: <span>{time}</span>
                  </p>
               </li>
            </div>
            ))
         }
      </div>
   )
}

export default Boulder