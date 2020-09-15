import React from "react"
import {Link} from "react-router-dom"
import { gql, useQuery } from "@apollo/client"

const GOLDEN_TRAILS = gql`
   query GoldenList($city: String) {
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

function Golden() {
   const { loading, error, data } = useQuery(GOLDEN_TRAILS, {
      variables: {city: "Golden"}
   })

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error :(</p>;
   if (!data) return <p>Not data</p>

   return(
      <div className="golden-pg">
         <Link to="/search-by-city" className="link">
            <button className="back-btn">BACK</button>
         </Link>

         <h1 className="boulder-title">Golden</h1>

         {data.trailsByCity.map(({ id, name, city, location, difficulty, length, time }) => (
            <div key={id} className="golden-list-section">
               <li className="golden-list-item">
                  <p className="golden-content-item">
                     Name: <span>{name}</span>
                  </p>
                  <p className="golden-content-item">
                     City: <span>{city}</span>
                  </p>
                  <p className="golden-content-item">
                     Location: <span>{location}</span>
                  </p>
                  <p className="golden-content-item">
                     Difficulty: <span>{difficulty}</span>
                  </p>
                  <p className="golden-content-item">
                     Length: <span>{length}</span>
                  </p>
                  <p className="golden-content-item">
                     Time: <span>{time}</span>
                  </p>
               </li>
            </div>
            ))
         }
      </div>
   )
}

export default Golden