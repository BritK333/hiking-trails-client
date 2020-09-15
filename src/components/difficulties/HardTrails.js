import React from "react"
import { gql, useQuery } from "@apollo/client"
import {Link} from "react-router-dom"

const HARD_TRAILS = gql`
   query HardTrails( $difficulty: String ) {
      trailsByDifficulty( difficulty: $difficulty ) {
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

function HardTrails() {
   const { loading, error, data } = useQuery(HARD_TRAILS, {
      variables: {difficulty: "hard"}
   })

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error :(</p>
   if (!data) return <p>Try Again!</p>
   
   return(
      <div className="hard-pg">
         <Link to="/search-by-difficulty" className="link">
            <button className="back-btn">BACK</button>
         </Link>

         <h1 className="hard-title">Hard Trails</h1>

         {data.trailsByDifficulty.map(({id, name, city, location, difficulty, length, time}) => (
            <div key={id} className="hard-list-section">
               <li className="hard-list-item">
                  <p className="hard-content-item">
                     Name: <span>{name}</span>
                  </p>

                  <p className="hard-content-item">
                     City: <span>{city}</span>
                  </p>

                  <p className="hard-content-item">
                     Location: <span>{location}</span>
                  </p>

                  <p className="hard-content-item">
                     Difficulty: <span>{difficulty}</span>
                  </p>

                  <p className="hard-content-item">
                     Length: <span>{length}</span>
                  </p>

                  <p className="hard-content-item">
                     Time: <span>{time}</span>
                  </p>
               </li>
            </div>
         ))}
      </div>
   )
}

export default HardTrails