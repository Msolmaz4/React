import React from 'react' 
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom'
import Product from './components/Product'

const  App = ()=> {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App