import React from 'react'
import { Routes, Route} from 'react-router-dom'

import Master from '../layout/Master'
import ProductList from '../pages/ProductList'
import AddProduct from "../pages/AddProduct.jsx"
import EditProduct from '../pages/EditProduct.jsx'

const AppRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Master />}>
            <Route index element={<ProductList />}/>
            <Route path='create' element={<AddProduct />}/>
            <Route path='edit/:id' element={<EditProduct />}/>
        </Route>
    </Routes>
  )
}

export default AppRoute
