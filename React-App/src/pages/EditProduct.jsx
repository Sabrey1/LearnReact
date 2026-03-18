import React from 'react'

const EditProduct = () => {
  return (
    <div>
        <form action="" className='p-4 shadow-sm'>
            <div className='d-flex justify-content-between align-items-center my-3'>
                <h3>Add Product</h3>
                <a href="/" className='btn btn-primary p-2'>Back</a>
            </div>
            <div className='form-group mb-3'>
                <label htmlFor="" for="productName">Product Name:</label>
                <input type="text" className='form-control' id='productName' placeholder='Enter Product Name' />
            </div>

            <div className='form-group mb-3'>
                <label htmlFor="" for="productName">Product Name:</label>
                <input type="text" className='form-control' id='productName' placeholder='Enter Product Name' />
            </div>

            <button>Save</button>
        </form>
    </div>
  )
}

export default EditProduct
