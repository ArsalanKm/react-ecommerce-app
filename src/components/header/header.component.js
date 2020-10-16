import React from "react";
// import './header.styles.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg'
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from "./header.styles";


const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to={"/"}>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                        <OptionDiv

                            onClick={() => auth.signOut()}
                        >
                            SignOut
                        </OptionDiv> :
                        <OptionLink
                            to='/signin'
                            className='option'
                        >
                            SignIn

                        </OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown/>
            }

        </HeaderContainer>
    )


}

const mapStateToProps = createStructuredSelector({

    currentUser: selectCurrentUser,
    hidden: selectCartHidden


})

export default connect(mapStateToProps)(Header)
