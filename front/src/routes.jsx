import React from "react"
import { Switch, Redirect, Router, Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import Home from './pages/Home'
import Zoom from './pages/Zoom'
import GoogleMap from './pages/Google'
import Layout from './component/Layout'

const history = createBrowserHistory()

const Routes = () => {
  const reactAppHome = process.env.REACT_APP_HOME
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route component={Home} path={`${reactAppHome}/`} exact />
          <Route component={Home} path={`${reactAppHome}/home`} exact />
          <Route component={Zoom} path={`${reactAppHome}/zoom`} exact />
          <Route component={GoogleMap} path={`${reactAppHome}/googleMaps`} exact />
          <Redirect to={{ pathname: reactAppHome }} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routes