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
                                    <li>
                                        <img
                                            className='cart--item-icon'
                                            src={`./icons/${item.id.toString().padStart(3, '0')}-${item.name}.svg`}
                                            alt="beetroot"
                                        />
                                        <p>{item.name}</p>
                                        <button className='quantity-btn remove-btn center' onClick={() => props.decreaseQuantity(item)}>-</button>
                                        <span className='quantity-text center'>{item.productInCart}</span>
                                        <button className='quantity-btn add-btn center' onClick={() => props.increaseQuantity(item)}>+</button>
                                    </li>
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