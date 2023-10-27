// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getPayment } from '../redux/data/action'

// function Payment() {

//     const paymentData=useSelector((store)=>store.data.getPayment)
//     const dispatch=useDispatch()

//     console.log("payment",paymentData)

//     useEffect(()=>{
//         dispatch(getPayment())
//     },[])



//   return (
//     <div>Payment
//       {paymentData.map((item)=>(
//         <>
//         {item.name}
//         </>
//       ))}

//     </div>
//   )
// }

// export default Payment





import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  Img,
  Image,
  
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPayment } from '../redux/data/action'

export default function Payment() {


  const paymentData=useSelector((store)=>store.data.getPayment)
    const dispatch=useDispatch()
    const[size,setSize]=useState(false)

    console.log("payment",paymentData)

    useEffect(()=>{
        dispatch(getPayment())
    },[])


    const handleHome=()=>{
      alert("clicked")
    }



  return (

    <>
    <Box border={'3px solid red'} height={'100vh'}>
      <Box border='5px solid green' onMouseOver={()=>setSize(true)}
      onMouseLeave={()=>setSize(false)} height={'100vh'}
      width={!size?'30px':'130px'}>
        <Text onClick={handleHome}>Home</Text>
        </Box>
        </Box>
   
     
    <>

    {paymentData?.map((item)=>(
      <>
      

      <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>Rs</Text>
            <Text fontSize={'6xl'} fontWeight={800}>
            {item.price}
            </Text>
            <Text color={'gray.500'}>/-</Text>
          </Stack>
        </Stack>

        <Image src={item.image} alt={`Picture of ${item.name}`} roundedTop="lg" />

        <Box bg={('gray.50', 'gray.900')} px={6} py={10}>
          {/* <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              5.000 page views
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              50 automation executions
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" /> 
              50 identified users
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              All features
            </ListItem>
          </List> */}

          {/* <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}>
            Start your trial
          </Button> */}
        </Box>
      </Box>
    </Center>

      
      
      </>

    ))}




    
</>




    </>

   
  )
}











