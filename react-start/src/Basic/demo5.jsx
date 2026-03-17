import React from 'react'

const demo5 = ({data}) => {
  return (
    <div>
        {data.map(function(value,index){
            return(
            <ul key={index}>
                <li>ID: {value.id}</li>
                <li>Name: {value.name}</li>
                <li>Name: {value.name}</li>
            </ul>
            )
        })}
    </div>
  )
}

export default demo5
