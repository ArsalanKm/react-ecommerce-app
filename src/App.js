import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import './pages/homepage/homepage.styles.scss'
import {Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import './App.css'
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {
        this.unsubscribeFromAuth =
            auth.onAuthStateChanged(user => {
            this.setState({currentUser: user})
            console.log(user)
        })

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {


        return (

            <BrowserRouter>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signin' component={SingInAndSignUpPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App