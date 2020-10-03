import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import './pages/homepage/homepage.styles.scss'
import {Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

const HatsPage = () => {
    return <div>hatpage</div>
}
const App = () => {
    return (

            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/hats' component={HatsPage}/>
            </Switch>
            </BrowserRouter>
    )
}
export default App