import React from "react"
import { Link } from "react-router-dom"
import CircularProgress from '@material-ui/core/CircularProgress';
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

   if (loading) return <CircularProgress />;
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
                     <Link to={`/${id}`} className="link-details">
                        <DetailsIcon style={{ fontSize: 40 }} className="details-icon" />
                        <p className="link-details-content">More Details</p>
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