import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SideBar from './SideBar'
import TopBar from './TopBar';
import Buttons from '../interfaces/Buttons';
import Cards from '../interfaces/Cards';
import Colors from '../interfaces/Colors';
import Borders from '../interfaces/Borders';
import Animations from '../interfaces/Animations';
import Other from '../interfaces/Other';
import Dashboard from '../Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register'
import Recover from '../pages/Recover'
import Unknown from '../pages/Unknown'
import Blank from '../pages/Blank'

export default class Layout extends Component {
    render() {
        return (
            <div id="wrapper">            
            <Router>                
                <SideBar/>
                <div id="content-wrapper" className="d-flex felx-column">
                    <div id="content">
                        <TopBar />
                        <div className="container-fluid">
                            <Switch>
                                <Route path="/buttons">
                                    <Buttons/>
                                </Route>
                                <Route path="/cards">
                                    <Cards/>
                                </Route>
                                <Route path="/colors">
                                    <Colors/>
                                </Route>
                                <Route path="/borders">
                                    <Borders/>
                                </Route>
                                <Route path="/animations">
                                    <Animations/>
                                </Route>
                                <Route path="/other">
                                    <Other/>
                                </Route>
                                <Route path="/login">
                                    <Login/>
                                </Route>
                                <Route path="/register">
                                    <Register/>
                                </Route>
                                <Route path="/recover">
                                    <Recover/>
                                </Route>
                                <Route path="/blank">
                                    <Blank />
                                </Route>
                                <Route path="/unknown">
                                    <Unknown />
                                </Route>
                                <Route exact path="/">
                                    <Dashboard/>
                                </Route>
                                <Route path="/**">
                                    <Unknown/>
                                </Route>

                            </Switch>
                        </div>
                    </div>
                </div>         
                
            </Router>
            </div>
        )
    }
}
