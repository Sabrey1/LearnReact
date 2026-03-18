import React, { useState } from 'react'

const Demo3 = () => {

    const [name , setName] = useState("");
    const [gender , setGender] = useState("Other");
    const [address , setAddress] = useState("");

    const [student , setStudent] = useState({});
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

  return (
    <div>
      <form action="" className='w-50 mx-auto'>
            <div className="py-3">
                <label htmlFor="">Name</label>
                <input type="text" onInput={handleName} className='form-control' />
            </div>
            <div className="py-3">
                <label htmlFor="">Gender</label>
                <select name="" id="" onChange={handleGender} className='form-select'>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className="py-3">
                <label htmlFor="">Address</label>
                <input type="text" onInput={handleAddress}  className='form-control' name="" id="" />
            </div>

            <button>Save</button>
      </form>

      <div className='w-50 mx-auto border'>
        <h3>Student Name: {name}</h3>
        <h3>Student gender: {gender}</h3>
        <h3>Student address: {address}</h3>
      </div>
    </div>
  )
}

export default Demo3
