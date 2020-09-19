import React from "react"
import { gql, useQuery } from "@apollo/client"
import CircularProgress from '@material-ui/core/CircularProgress'
import {Link} from "react-router-dom"

const MODERATE_TRAILS = gql`
   query ModerateTrails($difficulty: String) {
      trailsByDifficulty(difficulty: $difficulty ) {
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

function ModerateTrails() {
   const { loading, data, error } = useQuery(MODERATE_TRAILS, {
      variables: {difficulty: "moderate"}
   })

   if (loading) return <CircularProgress />
   if (error) return <p>Error :(</p>
   if (!data) return <p>Try Again!</p>

   return(
      <div className="moderate-pg">
         <Link to="/search-by-difficulty" className="link">
            <button className="back-btn">BACK</button>
         </Link>

         <h1 className="moderate-title">Moderate Trails</h1>

         {data.trailsByDifficulty.map(({id, name, city, location, difficulty, length, time}) => (
            <div key={id} className="moderate-list-section">
               <li className="moderate-list-item">
                  <p className="moderate-content-item">
                     Name: <span>{name}</span>
                  </p>

                  <p className="moderate-content-item">
                     City: <span>{city}</span>
                  </p>

                  <p className="moderate-content-item">
                     Location: <span>{location}</span>
                  </p>

                  <p className="moderate-content-item">
                     Difficulty: <span>{difficulty}</span>
                  </p>

                  <p className="moderate-content-item">
                     Length: <span>{length}</span>
                  </p>

                  <p className="moderate-content-item">
                     Time: <span>{time}</span>
                  </p>
               </li>
            </div>
         ))}
      </div>
   )
}

export default ModerateTrails