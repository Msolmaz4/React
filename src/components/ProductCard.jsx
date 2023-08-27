import React, { useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { deleteDataFunc} from '../redux/dataSlice'
import { modalFunc } from '../redux/modalSlice'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({dt}) => {

  const [openEdit , setOpenEdit] = useState(false)
  const dispatch = useDispatch()
  const navi = useNavigate()

  const updateFunc = ()=>{
  dispatch(modalFunc())
  //setOpenEdit(false)
  navi(`/?update=${dt?.id}`)
  
   

  }

  return (
    <div className='w-[200px] h-[200px] m-2 rounded-md relative'>
      <img src={dt?.url} className='w-full h-full rounded-md' alt="" />
     
      <div className='absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2 '> 
         <div> {dt?.name} </div>
         <div> {dt?.price} </div>
      </div>
      <div className='absolute top-0 right-2'>
      <BsThreeDots  onClick={()=>setOpenEdit(!openEdit)} color='black' size={24}/>
      </div>
      {
       openEdit && (
        <div className='bg-black border  border-white text-white absolute top-5 right-2 p-2 text-sm'>
          <div onClick={()=>dispatch(deleteDataFunc(dt?.id))} className='cursor-pointer'>Sil</div>
          <div onClick={updateFunc} className='cursor-pointer'>duncelle</div>
        </div>
       )
      }

    </div>
  )
}

export default ProductCard