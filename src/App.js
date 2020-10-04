import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import './pages/homepage/homepage.styles.scss'
import {Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import './App.css'
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

const App = () => {
    return (

        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/signin' component={SingInAndSignUpPage}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App