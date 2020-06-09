import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import pengguna from './pengguna'
import toko from './toko'

function index() {
  return (
    <Switch>
      <Route path='/pengaturan/pengguna' component={pengguna} />
      <Route path='/pengaturan/toko' component={toko} />
    </Switch>
  )
}

export default index
