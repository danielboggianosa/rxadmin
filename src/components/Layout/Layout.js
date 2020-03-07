import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SideBar from './SideBar'
import TopBar from './TopBar';
import TodoList from '../TodoList'
import Buttons from '../interfaces/Buttons';
import Cards from '../interfaces/Cards';
import Colors from '../interfaces/Colors';
import Borders from '../interfaces/Borders';
import Animations from '../interfaces/Animations';
import Other from '../interfaces/Other';

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
                                <Route path="/">
                                    <TodoList/>
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
