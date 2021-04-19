import CartItem from '../cartItem/CartItem'

///styles
import { Wrapper } from './Cart.styles';

//import types

import { CartItemType } from '../App'

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

export const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    const calcalateTotal = (items: CartItemType[]): number =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0)

    return (
        <Wrapper>
            <h2>Your shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map((item: CartItemType) => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h3>Total: ${calcalateTotal(cartItems).toFixed(2)}</h3>
        </Wrapper>
    )
}

