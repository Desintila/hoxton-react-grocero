function CartItem(props) {
    return (
        <li>
            <img
                className='cart--item-icon'
                src={`./icons/${props.item.id.toString().padStart(3, '0')}-${props.item.name}.svg`}
                alt="beetroot"
            />
            <p>{props.item.name}</p>
            <button className='quantity-btn remove-btn center' onClick={() => props.decreaseQuantity(props.item)}>-</button>
            <span className='quantity-text center'>{props.item.productInCart}</span>
            <button className='quantity-btn add-btn center' onClick={() => props.increaseQuantity(props.item)}>+</button>
        </li>
    )
}
export default CartItem