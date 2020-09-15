import React from "react"
// import { gql, useQuery } from "@apollo/client"
import {Link} from "react-router-dom"

function MainMenu() {
   return(
      <div className="main-menu">
         <h1 className="main-menu-title">Main Menu</h1>

         <div className="main-menu-column">
            <Link to="/trails" className="menu-option-box">
               <section>
                  <h2 className="menu-option-1">List Of All Trails</h2>
               </section>
            </Link>

            <Link to="/search-by-city" className="menu-option-box">
               <section>
                  <h2 className="menu-option-2">Search By City</h2>
               </section>
            </Link>

            <Link to="/search-by-difficulty" className="menu-option-box">
               <section>
                  <h2 className="menu-option-3">Search By Trail Difficulty</h2>
               </section>
            </Link>
         </div>

      </div>
   )
}

export default MainMenu