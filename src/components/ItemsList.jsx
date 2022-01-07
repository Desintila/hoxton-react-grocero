function ItemsList(props) {
    return (
        <header id="store">
            <h1>Grocero</h1>
            <ul className='item-list store--item-list'>
                {
                    props.items.map(item => (
                        <li>
                            <div className='store--item-icon'>
                                <img src={`./icons/${item.id.toString().padStart(3, '0')}-${item.name}.svg`} alt={item.name} />
                            </div>
                            <button onClick={() => props.addToCart(item)}>Add to cart</button>
                        </li>)

                    )

                }

            </ul>
        </header>
    )

}
export default ItemsList
