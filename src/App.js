import React from 'react';
import './App.css';
import {Switch, Route, Link} from "react-router-dom"
import MainMenu from "./components/MainMenu"
import TrailsList from "./components/TrailsList"
import TrailDetails from './components/TrailDetails'
import SearchByCity from "./components/SearchByCity"
import SearchByDifficulty from "./components/SearchByDifficulty"
import Boulder from "./components/cities/Boulder"
import ColoradoSprings from "./components/cities/ColoradoSprings"
import EstesPark from "./components/cities/EstesPark"
import IdahoSprings from "./components/cities/IdahoSprings"
import Golden from "./components/cities/Golden"
import SilverPlume from "./components/cities/SilverPlume"
import HomeIcon from '@material-ui/icons/Home'
import EasyTrails from "./components/difficulties/EasyTrails"
import ModerateTrails from "./components/difficulties/ModerateTrails"
import HardTrails from "./components/difficulties/HardTrails"


// import AppsIcon from '@material-ui/icons/Apps'

// to get started see docs: https://www.apollographql.com/docs/react/get-started/

function App({id}) {
  return (
    <div className="App">
      <h1 className="App-header">
        Colorado Hiking Trails
        <span>by Brit Kelley</span>
        <Link to="/" className="link-home">
          <HomeIcon style={{fontSize: "35px"}} className="home-icon" />
          <p className="icon-desc">HOME</p>
        </Link>
      </h1>

      <Switch>

        <Route exact path="/">
          <MainMenu />
        </Route>

        <Route path="/trails">
          <TrailsList />
        </Route>

        <Route path="/search-by-city">
          <SearchByCity />
        </Route>

        <Route path="/Boulder">
          <Boulder />
        </Route>

        <Route path="/Colorado-Springs">
          <ColoradoSprings />
        </Route>

        <Route path="/Estes-Park">
          <EstesPark />
        </Route>

        <Route path="/Idaho-Springs">
          <IdahoSprings />
        </Route>

        <Route path="/Golden">
          <Golden />
        </Route>

        <Route path="/Silver-Plume">
          <SilverPlume />
        </Route>

        <Route path="/search-by-difficulty">
          <SearchByDifficulty />
        </Route>

        <Route path="/easy-trails">
          <EasyTrails />
        </Route>

        <Route path="/moderate-trails">
          <ModerateTrails />
        </Route>

        <Route path="/hard-trails">
          <HardTrails />
        </Route>

        {/* this form of route allows TrailDetails to work   */}
        <Route path="/:id" 
          render = {({ match }) => (
              <TrailDetails key={id} match={match} />
          )} 
        />

      </Switch>

    </div>
  );
}

export default App;
