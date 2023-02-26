import { useCallback, useEffect, useState } from 'react'

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

function UseCallbackGood() {
  const [cart, setCart] = useState<Cart>()
  const [totalPrice, setTotalPrice] = useState<number>()

  const calcTotalPrice = useCallback(() => {
    const total = cart?.products.reduce((acc, item) => {
      const { quantity, price } = item
      acc += quantity * price
      return acc
    }, 0)

    setTotalPrice(total)
  }, [cart?.products])

  useEffect(() => {
    fetch('https://dummyjson.com/carts/1')
      .then((res) => res.json())
      .then(setCart)
  }, [])

  return (
    <section>
      <h2 className="text-success">useCallback (good)</h2>

      <div>
        <strong>Total price:</strong> {totalPrice}
      </div>

      <button className="btn btn-sm btn-primary" onClick={calcTotalPrice}>
        Calc total price
      </button>
    </section>
  )
}

export default UseCallbackGood
