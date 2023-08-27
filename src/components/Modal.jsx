import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { modalFunc } from '../redux/modalSlice'


const Modal = ({title,content}) => {
  const dispatch = useDispatch()
 

  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center text-center justify-center'>
      <div className='w-1/3 bg-white shadow-lg rounded-md p-4'>
        <div className='border-b py-3 flex items-center justify-between'>
          {title}
          <AiFillCloseCircle  onClick={()=>dispatch(modalFunc())} size={24}/>
        </div>
       {content}
      </div>

    </div>
  )
}

export default Modal