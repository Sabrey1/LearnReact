import React from 'react'

const demo6 = ({data}) => {
  return (
    <div>
    
      {data.map(function(value,index){
        return(
          <ul key={index}>
            <li>{value.name}</li>
            <li>{value.age}</li>
            <li>{value.gender}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default demo6
