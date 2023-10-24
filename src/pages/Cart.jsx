import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, getData } from '../redux/data/action'

function Cart() {

  const cartData=useSelector((store)=>store.data.getCart)
  const dispatch=useDispatch()

  console.log("cart",cartData)

  useEffect(()=>{
    dispatch(getCart())
  },[])
  console.log("getcartdataaa",getCart)


  return (
    <div>

      {cartData?.map((item)=>(
        <>
        {item.name}
        </>
      ))}



    </div>
  )
}

export default Cart