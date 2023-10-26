import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPayment } from '../redux/data/action'

function Payment() {

    const paymentData=useSelector((store)=>store.data.getPayment)
    const dispatch=useDispatch()

    console.log("payment",paymentData)

    useEffect(()=>{
        dispatch(getPayment())
    },[])



  return (
    <div>Payment
      {paymentData.map((item)=>(
        <>
        {item.name}
        </>
      ))}

    </div>
  )
}

export default Payment