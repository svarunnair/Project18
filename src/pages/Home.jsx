import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/data/action'

function Home() {

    const mainData=useSelector((store)=>store.data.data)
    const dispatch=useDispatch()

    console.log("mainData",mainData)


    useEffect(()=>{
        dispatch(getData())
    },[])
  return (
    <div>
        {mainData?.map((item)=>(
            <>
            {item.name}
            </>
        ))}


   </div>
  )
}

export default Home