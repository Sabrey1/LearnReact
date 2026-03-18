import React from 'react'

const ProductList = () => {
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center my-3'>
                <h3>Add Product</h3>
                <a href="/create" className='btn btn-primary p-2'>Create</a>
        </div>
        <table className='table table-bordered text-center'>
            <thead>
                <tr>
                    <td>Product ID</td>
                    <td>Product Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Product 1</td>
                    <td>$10.99</td>
                    <td>5</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ProductList
