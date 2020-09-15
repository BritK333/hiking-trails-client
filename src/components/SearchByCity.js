import React from "react"
import {Link} from "react-router-dom"
// import { gql, useQuery } from "@apollo/client"

function SearchByCity() {
   return(
      <div className="search-by-city-pg">
         <Link to="/">
            <button className="back-btn">BACK to Main Menu</button>
         </Link>

         <h1 className="search-city-title">Search By City</h1>

         <div className="cities-row">
            <Link to="/Boulder" className="city-box">
               <section><h2>Boulder</h2></section>
            </Link>

            <Link to="/Colorado-Springs" className="city-box">
               <section><h2>Colorado Springs</h2></section>
            </Link>

            <Link to="/Estes-Park" className="city-box">
               <section><h2>Estes Park</h2></section>
            </Link>
         </div>

         

         <div className="cities-row">
            <Link to="/Golden" className="city-box">
               <section><h2>Golden</h2></section>
            </Link>
            <Link to="/Idaho-Springs" className="city-box">
               <section><h2>Idaho Springs</h2></section>
            </Link>

            <Link to="/Silver-Plume" className="city-box">
               <section><h2>Silver Plume</h2></section>
            </Link>
         </div>
      </div>
   )
}

export default SearchByCity