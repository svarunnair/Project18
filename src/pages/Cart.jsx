// import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getCart, getData } from '../redux/data/action'
// import { Link } from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom'

// function Cart() {

//   const cartData=useSelector((store)=>store.data.getCart)
//   const dispatch=useDispatch()
//   const navigate=useNavigate()

//   console.log("cart",cartData)

//   useEffect(()=>{
//     dispatch(getCart())
//   },[])
//   console.log("getcartdataaa",getCart)


//   const handleHome=()=>{
//     navigate('/home')
//   }


//   return (

//     <>

//     <Link onClick={handleHome}>Home</Link><br/>

//     Selected Products



//     <div>

//       {cartData?.map((item)=>(
//         <>
//         {item.name}
//         </>
//       ))}



//     </div>

//     </>
//   )
// }

// export default Cart






import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
  Text,
  Link,
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteAll, deleteCart, getCart, patchCart, postPayment } from '../redux/data/action'
import { useEffect, useState } from 'react'

const data = {
  isNew: true,
  
  rating: 4.2,
  numReviews: 34,
}



function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            )
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  )
}

function Cart() {


  const cartData=useSelector((store)=>store.data.getCart)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
  
    console.log("cart",cartData)
  
    useEffect(()=>{
      dispatch(getCart())
    },[])
    console.log("getcartdataaa",getCart)


    const handleDelete=(id)=>{
      dispatch(deleteCart(id))
    }
  
    const handleAdd=(id,quant)=>{
      let data={
        quant:quant+1
      }
      dispatch(patchCart(id,data))
    }

    const handleReduce=(id,quant)=>{
      if(quant<2){
        quant=2}
      
      let data={
        quant:quant-1
      }
      dispatch(patchCart(id,data))
    }
  

    let total=cartData.reduce((acc,item,index)=>{
      return acc+item.price*item.quant
    },0)


    const handleHome=()=>{
      navigate('/home')
    }



    const handleBuy=()=>{
      cartData?.map((item)=>(
      
        dispatch(postPayment(item))
      
      ))

    }

    useEffect(()=>{
      cartData?.map((item)=>(
        dispatch(deleteAll(item.id))
      ))
    },[postPayment])
   





  return (

    <>
    Selected products<br/>
    <Link onClick={handleHome}>Back to Home</Link>

    {cartData?.map((item)=>(
              <>
            

            <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {item.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )}

        <Image src={item.image} alt={`Picture of ${item.name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {item.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {item.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={item.rating} numReviews={item.numReviews} />
            <Box fontSize="2xl" color={('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {item.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>

    <Button onClick={()=>handleDelete(item.id)}>Delete item</Button>


    <Button onClick={()=>handleAdd(item.id,item.quant)}>Add</Button>
            <Button onClick={()=>handleReduce(item.id,item.quant)}>Reduce</Button>
          <Text>Quantity: {item.quant}</Text>


              </>
            ))}

<Text>Total amount : {total}</Text>

<Button onClick={handleBuy}>Buy now</Button>

           
      


    


    </>
  )
}

export default Cart