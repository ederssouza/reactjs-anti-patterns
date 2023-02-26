import { useState } from 'react'

function UpdateStateGood() {
  const [count, setCount] = useState(0)

  function handleClick(amount: number) {
    setCount((prevCount) => prevCount + amount)
    setCount((prevCount) => prevCount + amount)
  }

  return (
    <section>
      <h2 className="text-success">Update State (good)</h2>

      <div>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => handleClick(-1)}
        >
          -
        </button>
        <span className="px-2">{count}</span>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => handleClick(1)}
        >
          +
        </button>
      </div>
    </section>
  )
}

export default UpdateStateGood
