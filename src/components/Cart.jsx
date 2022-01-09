import CartItem from "./CartItem"
import Total from "./Total"

function Cart(props) {
    return (
        <main id="cart">
            <h2>Your Cart</h2>

            <div className='cart--item-list-container'>
                <ul className='item-list cart--item-list'>
                    {
                        props.items.map(item => {
                            if (item.productInCart > 0)

                                return (
                                    <CartItem key={item.id} item={item} increaseQuantity={props.increaseQuantity} decreaseQuantity={props.decreaseQuantity} />
                                )
                        })
                    }

                </ul>

            </div>
            <Total getTotal={props.getTotal} />

        </main>
    )
}
export default Cart