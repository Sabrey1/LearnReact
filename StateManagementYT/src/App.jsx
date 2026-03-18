import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Masterlayout from './layout/Masterlayout'
import ProductList from "./pages/ProductList/ProductList.jsx"

import EditProduct from "./pages/EditProduct/EditProduct.jsx"

function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route path='/' element={<Masterlayout />} >
                  <Route index element={<ProductList />}/>
                  <Route path='/edit/:id'  element={<EditProduct />}/>
              </Route>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
