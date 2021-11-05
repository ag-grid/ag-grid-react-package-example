import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import NavItem from "./NavItem";
import RichGridDeclarativeExample from "./richGridDeclarativeExample/RichGridDeclarativeExample";
import SimpleReduxDynamicExample from "./simpleReduxDynamicComponentExample/SimpleReduxExample";
import SimpleReduxHookExample from "./simpleReduxHooksExample/SimpleReduxHookExample";

const SideBar = () => (
    <div style={{float: "left", width: '20%', marginRight: 25}}>
        <ul className="nav nav-pills">
            <NavItem to='/rich-grid-declarative'>Rich Grid with Declarative Markup</NavItem>
            <NavItem to='/simple-redux-dynamic'>Simple Redux Dynamic Component Example</NavItem>
            <NavItem to='/simple-redux-hook'>Simple React Hook Component Example</NavItem>
        </ul>
    </div>
);

class App extends Component {
    render() {
        return (
            <div style={{display: "inline-block", width: "100%"}}>
                <SideBar/>
                <div style={{float: "left", width: '75%'}}>
                    <Switch>
                        <Redirect from="/" exact to="/rich-grid-declarative"/>
                        <Route exact path='/rich-grid-declarative' component={RichGridDeclarativeExample}/>
                        <Route exact path='/simple-redux-dynamic' component={SimpleReduxDynamicExample}/>
                        <Route exact path='/simple-redux-hook' component={SimpleReduxHookExample}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App
