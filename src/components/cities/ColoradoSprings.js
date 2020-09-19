import React from "react"
import {Link} from "react-router-dom"
import CircularProgress from '@material-ui/core/CircularProgress'
import { gql, useQuery } from "@apollo/client"

const COLORADO_SPRINGS_TRAILS = gql`
   query ColoradoSpringsList($city: String) {
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

function ColoradoSprings() {
   const { loading, error, data } = useQuery(COLORADO_SPRINGS_TRAILS, {
      variables: {city: "Colorado Springs"}
   })

   if (loading) return <CircularProgress />;
   if (error) return <p>Error :(</p>;
   if (!data) return <p>Not data</p>

   return(
      <div className="cSprings-pg">
         <Link to="/search-by-city" className="link">
            <button className="back-btn">BACK</button>
         </Link>

         <h1 className="cSprings-title">Colorado Springs</h1>

         {data.trailsByCity.map(({ id, name, city, location, difficulty, length, time }) => (
            <div key={id} className="cSprings-list-section">
               <li className="cSprings-list-item">
                  <p className="cSprings-content-item">
                     Name: <span>{name}</span>
                  </p>
                  <p className="cSprings-content-item">
                     City: <span>{city}</span>
                  </p>
                  <p className="cSprings-content-item">
                     Location: <span>{location}</span>
                  </p>
                  <p className="cSprings-content-item">
                     Difficulty: <span>{difficulty}</span>
                  </p>
                  <p className="cSprings-content-item">
                     Length: <span>{length}</span>
                  </p>
                  <p className="cSprings-content-item">
                     Time: <span>{time}</span>
                  </p>
               </li>
            </div>
            ))
         }
      </div>
   )
}

export default ColoradoSprings