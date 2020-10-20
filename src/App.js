import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

import {GlobalStyle} from "./global.styles";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SingInAndSignUpPage from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up'
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux'
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selector";

class App extends React.Component {


    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth =
            auth.onAuthStateChanged(async userAuth => {
                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth);

                    userRef.onSnapshot(snapShot => {
                        this.props.setCurrentUser({
                                id: snapShot.id,
                                ...snapShot.data()
                            }
                        );

                        console.log(this.state);
                    });
                }

                this.props.setCurrentUser(userAuth);
            });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <BrowserRouter>
                <GlobalStyle/>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>

                    <Route
                        exact path='/signin'
                        render={() => this.props.currentUser ?
                            (<Redirect to='/'/>) :
                            (<SingInAndSignUpPage/>)}/>


                </Switch>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {setCurrentUser: user => dispatch(setCurrentUser(user))}

}
const mapStateToProps = (state) => {
    return {currentUser: selectCurrentUser(state)}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);