import React from "react"
import {Link} from "react-router-dom"
import CircularProgress from '@material-ui/core/CircularProgress'
import { gql, useQuery } from "@apollo/client"

const IDAHO_SPRINGS_TRAILS = gql`
   query IdahoSpringsList($city: String) {
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

function IdahoSprings() {
   const { loading, error, data } = useQuery(IDAHO_SPRINGS_TRAILS, {
      variables: {city: "Idaho Springs"}
   })

   if (loading) return <CircularProgress />;
   if (error) return <p>Error :(</p>;
   if (!data) return <p>Not data</p>

   return(
      <div className="iSprings-pg">
         <Link to="/search-by-city" className="link">
            <button className="back-btn">BACK</button>
         </Link>

         <h1 className="iSprings-title">Idaho Springs</h1>

         {data.trailsByCity.map(({ id, name, city, location, difficulty, length, time }) => (
            <div key={id} className="iSprings-list-section">
               <li className="iSprings-list-item">
                  <p className="iSprings-content-item">
                     Name: <span>{name}</span>
                  </p>
                  <p className="iSprings-content-item">
                     City: <span>{city}</span>
                  </p>
                  <p className="iSprings-content-item">
                     Location: <span>{location}</span>
                  </p>
                  <p className="iSprings-content-item">
                     Difficulty: <span>{difficulty}</span>
                  </p>
                  <p className="iSprings-content-item">
                     Length: <span>{length}</span>
                  </p>
                  <p className="iSprings-content-item">
                     Time: <span>{time}</span>
                  </p>
               </li>
            </div>
            ))
         }
      </div>
   )
}

export default IdahoSprings