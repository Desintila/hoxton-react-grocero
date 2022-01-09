import Item from "./Item"

function ItemsList(props) {
    return (
        <header id="store">
            <h1>Grocero</h1>
            <button onClick={() => props.sortByPrice()}>Sort By Price</button>

            <button onClick={() => props.sortByName()}>Sort By Name</button>

            <ul className='item-list store--item-list'>
                {
                    props.items.map(item => (
                        <Item item={item} addToCart={props.addToCart} key={item.id} />)
                    )
                }

            </ul>
        </header>
    )

}
export default ItemsList
