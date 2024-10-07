import { useState } from "react"

const Counter = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue)

  return (
    <div>
      <h2>Compteur: {value} </h2>
      <button onClick={() => setValue(value + 1)}>Augmenter</button>
      <button onClick={() => setValue(value - 1)}>Diminuer</button>
    </div>
  )
}

export default Counter