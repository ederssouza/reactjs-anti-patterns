import { useEffect, useState } from 'react'

type Product = {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
}

type Cart = {
  id: string
  products: Product[]
}

function UseCallbackBad() {
  const [cart, setCart] = useState<Cart>()
  const [totalPrice, setTotalPrice] = useState<number>()

  function calcTotalPrice() {
    const total = cart?.products.reduce((acc, item) => {
      const { quantity, price } = item
      acc += quantity * price
      return acc
    }, 0)

    setTotalPrice(total)
  }

  useEffect(() => {
    fetch('https://dummyjson.com/carts/1')
      .then((res) => res.json())
      .then(setCart)
      .catch((error) => console.error(error))
  }, [])

  return (
    <section>
      <h2 className="text-danger">useCallback (bad)</h2>

      <div>
        <strong>Total price:</strong> {totalPrice}
      </div>

      <button className="btn btn-sm btn-primary" onClick={calcTotalPrice}>
        Calc total price
      </button>
    </section>
  )
}

export default UseCallbackBad
