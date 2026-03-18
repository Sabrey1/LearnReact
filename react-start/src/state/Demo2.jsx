import React, { useState} from 'react'

const Demo2 = () => {

    const [input , setInput] = useState("")

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    
  return (
    <div>
        <input type="text" onInput={handleInput}  />

        <p>Display Value {input}</p>
    </div>
  )
}

export default Demo2
