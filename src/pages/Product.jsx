import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal'
import Input from '../components/Input'
import Button from '../components/Button'
import { createDataFunc, updateDataFunc } from '../redux/dataSlice'
import { modalFunc } from '../redux/modalSlice'
import { useLocation, useNavigate } from 'react-router-dom'

const Product = () => {
  const dispatch = useDispatch()
  const {modal} =useSelector(state =>state.modal)
  console.log(modal,'modalslice')
  const {data,keyword} =useSelector(state=>state.data)
  
  console.log(data,'datsSlice')
  const local = useLocation()
  console.log(local)
  const navi = useNavigate()

  const [productInfo , setProductInfo] = useState({name:'',price:'',url:''})

  const buttonFunc = ()=>{
    dispatch(createDataFunc({...productInfo, id: data.length+1}))
    dispatch(modalFunc())
    setProductInfo('')
  }
 

  const onChangeFunc = (e,type)=>{
   //burda url oldgiu ivcin dikkat et 
   if(type == 'url'){
     setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))
 
 
   }else{
     setProductInfo(prev => ({...prev, [e.target.name]:[e.target.value]}))
   }
 
  }

  let loc = local?.search.split('=')[1]
 useEffect(()=>{
  if(loc){
    setProductInfo(data.find(dt=>dt.id == loc))
  }

 },[loc])

 const buttonUpdateFunc =()=>{
  dispatch(updateDataFunc({...productInfo,id:loc}))
  dispatch(modalFunc())
  navi('/')


}
  const contentModal =(
    <div>
       <Input
       value={productInfo.name}
        type={'text'}
        placeholder={'urun ekle'}
        name={'name'}
        id={'name'}
        onChange={e=>onChangeFunc(e,'name')}
         />
      <Input
      value={productInfo.price}
      type={'text'}
        placeholder={'fiyat ekle'}
        name={'price'}
        id={'price'}
        onChange={e=>onChangeFunc(e,'price')}
         />
      <Input
      type={'file'}
        placeholder={'resim ekle'}
        name={'url'}
        id={'url'}
        onChange={e=>onChangeFunc(e,'file')}
         />
         <Button btnText={loc ? 'urun Guncele' : 'urun olustur'} onClick={loc ? buttonUpdateFunc : buttonFunc}/>
    </div>
  )

const arama = data.filter(dt => dt.name.includes(keyword))
 // console.log(filtered,'filter')
 console.log(arama,'arama')
  return (
    <div>
      <div className='flex items-center flex-wrap'>
        {
          data?.map((dt,i)=>(
              <ProductCard key={i} dt={dt} />
          ))
        }
      </div>
    
      {
        modal && <Modal
        title={loc ? 'urun Guncele' : 'urun olustur'}
    
        content={ contentModal}
        />
      }
    </div>
  )
}

export default Product