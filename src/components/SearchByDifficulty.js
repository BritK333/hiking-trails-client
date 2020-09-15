import React from "react"
import {Link} from "react-router-dom"
// import { gql, useQuery } from "@apollo/client"

function SearchByDifficulty() {
   return(
      <div className="search-by-difficulty-pg">
         <Link to="/">
            <button className="back-btn">BACK to Main Menu</button>
         </Link>

         <h1 className="search-difficulty-title">Search By Difficulty</h1>

         <div className="difficulty-row">
            <Link to="/easy-trails" className="difficulty-box">
               <section><h2>Easy</h2></section>
            </Link>

            <Link to="/moderate-trails" className="difficulty-box">
               <section><h2>Moderate</h2></section>
            </Link>

            <Link to="/hard-trails" className="difficulty-box">
               <section><h2>Hard</h2></section>
            </Link>
         </div>

      </div>
   )
}

export default SearchByDifficulty