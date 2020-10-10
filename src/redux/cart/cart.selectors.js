import {createSelector} from 'reselect'

const selectCart = state => {
    return (state.cart)
}

export const selectCartItems =
    createSelector([selectCart], (cart) => {
        return (cart.cartItems)
    })

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden)

export const selectCartItemsCount = createSelector(
    [selectCartItems], (cartItems) => {
        return (
            cartItems.reduce((accumulatedQuantity, cartItem) => {
                return accumulatedQuantity + cartItem.quantity
            }, 0)
        )
    }
)

export const selectCartTotal = createSelector(
    [selectCartItems], (cartItems) => {
        return (cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.price * cartItem.quantity
        }, 0))
    }
)