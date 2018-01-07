import './main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import Basket from 'containers/basket'
import reducers from 'reducers'
import Layout from 'containers/layout'
import Phones from 'containers/phones'
import Phone from 'containers/phone'
import Form from "components/form/index";
import Admin from "containers/admin/index";
import UsersList from "containers/users/index";
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/home' component={Phones} />
                <Route path='/categories/:id' component={Phones} />
            </Route>
            <Route path='/phones/:id' component={Phone} />
            <Route path='/basket' component={Basket} />
            <Route path='/' component={Form}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/users' component={UsersList}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);