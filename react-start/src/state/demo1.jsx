import React, { useState } from 'react'

const demo1 = () => {

  const [value, setValue] = useState(0);
    const handdleClick = () => {
        setValue(10);
    }

  return (
    <div>
        <button onClick={handdleClick}>Handle click</button>
        <p>a = {value}</p>
    </div>
  )
}

export default demo1
