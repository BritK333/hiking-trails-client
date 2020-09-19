import React from "react"
import { gql, useQuery } from "@apollo/client"
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from "react-router-dom"

const EASY_TRAILS = gql`
   query EasyTrails($difficulty: String) {
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

function EasyTrails() {
   const { loading, data, error } = useQuery(EASY_TRAILS, {
      variables: {difficulty: "easy"}
   })

   if (loading) return <CircularProgress />
   if (error) return <p>Error :(</p>
   if (!data) return <p>Try Again!</p>

   return(
      <div className="easy-pg">
         <Link to="/search-by-difficulty" className="link">
            <button className="back-btn">BACK</button>
         </Link>

         <h1 className="easy-title">Easy Trails</h1>

         {data.trailsByDifficulty.map(({id, name, city, location, difficulty, length, time}) => (
            <div key={id} className="easy-list-section">
               <li className="easy-list-item">
                  <p className="easy-content-item">
                     Name: <span>{name}</span>
                  </p>

                  <p className="easy-content-item">
                     City: <span>{city}</span>
                  </p>

                  <p className="easy-content-item">
                     Location: <span>{location}</span>
                  </p>

                  <p className="easy-content-item">
                     Difficulty: <span>{difficulty}</span>
                  </p>

                  <p className="easy-content-item">
                     Length: <span>{length}</span>
                  </p>

                  <p className="easy-content-item">
                     Time: <span>{time}</span>
                  </p>
               </li>
            </div>
         ))}
      </div>
   )
}

export default EasyTrails