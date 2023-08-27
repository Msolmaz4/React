import React from 'react'
import {BiMessageSquareAdd} from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { modalFunc } from '../redux/modalSlice'
import { searchDataFunc, sortingDataFunc } from '../redux/dataSlice'






const Header = () => {

const dispatch =useDispatch();



  return (
    <div className='flex items-center justify-between bg-indigo-600 text-white marker:px-3 py-3'>
      <div className='text-3l'>REACT UYHGULMA</div>
      <div className='flex items-center gap-5'>
        <div className='text-black'> 
          <select onChange={e => dispatch(sortingDataFunc(e.target.value))} className='h-10 rounded-lg' name="" id="">
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>
        <div>
          <input onChange={e => dispatch(searchDataFunc(e.target.value))}  className='h-10 rounded-lg px-4 text-black'  type="text" placeholder='arama yapiniz' />
        </div>
        <div onClick={()=>dispatch(modalFunc())}  className='bg-indigo-800 w-10 h-10 rounded-full items-center justify-center cursor-pointer'>
          <BiMessageSquareAdd size={24}/>
        </div>
      </div>
    </div>
  )
}

export default Header