import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Main from '../containers/Main'
import Dashboard from '../containers/Dashboard'

const createRoutes = ()=> {
    return (
        <Route 
            path='/'
            component={Main}>
            <IndexRoute component={Dashboard}/>
        </Route>
    )
}

const Routes = createRoutes()

export default Routes   