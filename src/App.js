import React from 'react' 
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom'
import Product from './pages/Product'
import Header from './components/Header'

const  App = ()=> {


  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/home' element={<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App