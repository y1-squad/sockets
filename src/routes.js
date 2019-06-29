import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Form from './Components/Form'

export default (
    <Switch>
        <Route exact path='/' component={Form} />
    </Switch>
)