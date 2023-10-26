import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPayment } from '../redux/data/action'

function Payment() {

    const paymentData=useSelector((store)=>store.data.getPayment)
    const dispatch=useDispatch()

    console.log("payment",paymentData)

    useSelector(()=>{
        dispatch(getPayment())
    },[])



  return (
    <div>Payment

    </div>
  )
}

export default Payment