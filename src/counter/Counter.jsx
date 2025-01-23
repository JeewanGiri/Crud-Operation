import { useState } from "react"

const Counter = () => {
    const [count, setCount]=useState(10);
    const increase=()=>{
           setCount(count +1)
    }
    const deccrease=()=>{
        setCount(count -1)
    }
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={deccrease}>Decrease</button>
      {count}
    </div>
  )
}

export default Counter
