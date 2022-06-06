import React from 'react'
import Search from '../components/Search/Search'
import { Switch, Route } from "react-router-dom";
import Benefits from '../components/Benefits/Benefits';


const MainRouter = () => {
  return (
    <>
        <Switch>
        <Route 
          exact path="/home/search"
          component={ Search }
      />
      <Route 
          exact path="/home/benefits"
          component={ Benefits }
      />
   
        </Switch>
    </>
  )
}

export default MainRouter