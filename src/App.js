import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Component perpages
import Registrasi from './pages/registrasi/index'
import Login from './pages/login/index'
import Lupapassword from './pages/lupa-password/index'
import NotFound from './pages/404/index'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/registrasi' component={Registrasi} />
        <Route path='/login' component={Login} />
        <Route path='/lupapassword' component={Lupapassword} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
