import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Form from './Components/Form'
import Room from './Components/Room'
import Parent from './Components/ParentChatRoom'

export default (
    <Switch>
        <Route exact path='/' component={Form} />
        <Route path='/room' component={Room} />
        <Route path='/chat' component={Parent} />
    </Switch>
)