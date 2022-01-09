function Item(props) {
    return (
        <li>
            <div className='store--item-icon'>
                <img src={`./icons/${props.item.id.toString().padStart(3, '0')}-${props.item.name}.svg`} alt={props.item.name} />
            </div>
            <button onClick={() => props.addToCart(props.item)}>Add to cart</button>
        </li>
    )
}
export default Item