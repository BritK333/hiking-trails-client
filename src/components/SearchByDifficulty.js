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
               <section><h2>E  a  s  y</h2></section>
            </Link>

            <Link to="/moderate-trails" className="difficulty-box">
               <section><h2>M  o  d  e  r  a  t  e</h2></section>
            </Link>

            <Link to="/hard-trails" className="difficulty-box">
               <section><h2>H  a  r  d</h2></section>
            </Link>
         </div>

      </div>
   )
}

export default SearchByDifficulty