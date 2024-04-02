import { useState } from "react"
import "./styles.css"

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>

      <section className="btns-container">
        <button onClick={handleIncrement} className="increment">+</button>
        <button onClick={handleDecrement} className="decrement">-</button>
      </section>
    </>
  )
}

export default Counter
