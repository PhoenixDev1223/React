import React, {Component} from 'react';
import { User } from 'react-feather';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import List from './List'
import './style.css'

class User extends Component
{
    render() {
        return(
          <Router>
            <div className="container">
              <Header/>

              <Switch>
                <Route path='/' component={List} exact/>
              </Switch>
            </div>
          </Router>
        )
    }
}
export default User