import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, getData } from '../redux/data/action'
import { Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Cart() {

  const cartData=useSelector((store)=>store.data.getCart)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  console.log("cart",cartData)

  useEffect(()=>{
    dispatch(getCart())
  },[])
  console.log("getcartdataaa",getCart)


  const handleHome=()=>{
    navigate('/home')
  }


  return (

    <>

    <Link onClick={handleHome}>Home</Link><br/>

    Selected Products



    <div>

      {cartData?.map((item)=>(
        <>
        {item.name}
        </>
      ))}



    </div>

    </>
  )
}

export default Cart