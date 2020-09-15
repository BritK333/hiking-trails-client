import React from "react"
import { Link } from "react-router-dom"
// import TrailDetails from "./TrailDetails"
import DetailsIcon from '@material-ui/icons/Details';
import { gql, useQuery } from "@apollo/client"

const Get_Trails = gql`
   query GetTrails {
      trailsMany {
         id
         name
      }
   }`;

function TrailsList({id}) {
   const {loading, error, data } = useQuery(Get_Trails)

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error :(</p>;
   if (!data) return <p>Not data</p>

   return(
      <div className="all-trails">
         <Link to="/" className="link">
            <button className="back-btn">BACK to Main Menu</button>
         </Link>

         {data.trailsMany.map(({id, name}) => (
            <div key={id} value={name} className="trail-names">
               <ul className="list">
                  <li className="list-item">
                     {name}
                     <Link to={`/${id}`}>
                        <DetailsIcon style={{ fontSize: 45 }} className="details-icon" />
                     </Link>
                  </li>
               </ul>
            </div>
            )
         )}
      </div>
   )

   
}
                  

export default TrailsList