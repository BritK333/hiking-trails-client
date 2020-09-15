import React from "react"
import {Link} from "react-router-dom"
import { gql, useQuery } from "@apollo/client"

const Get_Trail_Details = gql`
   query GetOneTrail($id: ID!) {
      trailsOne(id: $id) {
         id
         name
         city
         location
         difficulty
         length
         time
      }
   }
`;

function TrailDetails({ match }) {
   // let { id } = this.match.params
   // const params = useParams();

   const {loading, error, data } = useQuery(Get_Trail_Details, {
      variables: { id: match.params.id }, // match.params needed to get id clicked on from TrailsList
    })

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error :(</p>;
   if (!data) return <p>Not data</p>

   return(
      <div className="details-pg">
         <Link to="/trails">
            <button className="back-btn">BACK</button>
         </Link>

         <h1 className="details-title">
            {data.trailsOne.name}
         </h1>

         <div className="details-content">
            <p className="content-item">
               City: <span>{data.trailsOne.city}</span>
            </p>

            <p className="content-item">
               Location: <span>{data.trailsOne.location}</span>
            </p>

            <p className="content-item">
               Difficulty: <span>{data.trailsOne.difficulty}</span>
            </p>

            <p className="content-item">
               Length: <span>{data.trailsOne.length}</span>
            </p>

            <p className="content-item">
               Time: <span>{data.trailsOne.time}</span>
            </p>
         </div>
         
      </div>
   )
}

export default TrailDetails