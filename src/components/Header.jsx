import React from 'react'
import {BiMessageSquareAdd} from 'react-icons/bi'
import { useDispatch } from 'react-redux'






const Header = () => {

const dispatch =useDispatch()



  return (
    <div className='flex items-center justify-between bg-indigo-600 text-white px-3 py-3'>
      <div className='text-3l'>REACT UYHGULMA</div>
      <div className='flex items-center gap-5'>
        <div className='text-black'> 
          <select className='h-10 rounded-lg' name="" id="">
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>
        <div>
          <input className='h-10 rounded-lg px-4'  type="text" placeholder='arama yapiniz' />
        </div>
        <div className='bg-indigo-800 w-10 h-10 rounded-full items-center justify-center cursor-pointer'>
          <BiMessageSquareAdd size={24}/>
        </div>
      </div>
    </div>
  )
}

export default Header