import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'
import Ideas from './components/Ideas'
import MapOne from './components/common/MapOne'
import MapTwo from './components/common/MapTwo'
import Events from './components/common/EventSection/Events'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
// import Filter from './components/common/Filter.js'
import ContactForm from './components/common/EventSection/ContactForm'
import Filter from './components/common/Filter'
import IndexAndMap from './components/common/IndexAndMap'

import WorkspacesNew from './components/common/Workspaces/WorkspacesNew'
import AboutUs from './components/common/AboutUs'
const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/workspaces/new' component={WorkspacesNew} />
        <Route path="/ideas" component={Ideas} />
        <Route exact path='/events' component={Events} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path='/mapone' component={MapOne} />
        <Route exact path='/maptwo' component={MapTwo} />
        <Route exact path='/filter' component={Filter} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/contactform' component={ContactForm} />
        <Route exact path='/indexandmap' component={IndexAndMap} />
      </Switch>
      <Footer />
    </Router>
  )
}
export default App

