import { useState } from 'react'

import './App.css'
import products from './data/products'
import ItemsList from './components/ItemsList'
import Cart from './components/Cart'

function App() {

  const [items, setItems] = useState(products)
  const [type, setType] = useState('')


  function addToCart(item) {
    const updatedItems = [...items]
    item.productInCart++
    setItems(updatedItems)
  }


  function getTotal() {
    let total = 0
    items.map(item => {
      total += item.productInCart * item.price
    })
    return total
  }


  function decreaseQuantity(item) {
    const updatedItems = [...items]
    item.productInCart--
    setItems(updatedItems)
  }


  function increaseQuantity(item) {
    const updatedItems = [...items]
    item.productInCart++
    setItems(updatedItems)
  }


  function sortByPrice() {
    const products = [...items]
    products.sort((a, b) => a.price - b.price)
    setItems(products)
  }


  function sortByName() {
    const products = [...items]
    products.sort((a, b) => {
      if (a.name < b.name)
        return -1
      if (a.name > b.name)
        return 1
    })
    setItems(products)
  }


  function itemsToDisplay() {
    let products = items
    if (type === 'fruit') {
      products = items.filter(item => item.productType === 'fruit')
    }
    if (type === 'vegetable') {
      products = items.filter(item => item.productType === 'vegetable')
    }
    return products
  }

  return (
    <div className="App">

      < ItemsList itemsToDisplay={itemsToDisplay} setType={setType} addToCart={addToCart} setItems={setItems} sortByPrice={sortByPrice} sortByName={sortByName} />

      <Cart items={items} getTotal={getTotal} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />

    </div>
  )
}

export default App
