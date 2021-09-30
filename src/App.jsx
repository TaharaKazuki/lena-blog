import React from 'react'
import Topbar from './components/topbar/Topbar';
import Homepage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Topbar />
      <Homepage />
    </Router>
  )
}

export default App;
