// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getData } from '../redux/data/action'

// function Home() {

//    
//   return (
//     <div>
//         {mainData?.map((item)=>(
//             <>
//             {item.name}
//             </>
//         ))}


//    </div>
//   )
// }

// export default Home






import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { getData, postCart } from '../redux/data/action'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Home() {


  const mainData=useSelector((store)=>store.data.data)
      const dispatch=useDispatch()
      const navigate=useNavigate()
      const [sort,setSort]=useState([])
  
      console.log("mainData",mainData)
  
  
      useEffect(()=>{
          dispatch(getData())
      },[])


      const handleAddCart=(item)=>{
        item.quant=1
          dispatch(postCart(item))
      }


      const handleCart=()=>{
        navigate('/cart')
      }

      const handleLogout=()=>{
        localStorage.removeItem("token")
       navigate('/signin')
      }
      

      const handleSortH=()=>{
        let sortData=mainData?.sort((a,b)=>{
          return (b.price-a.price)
        })
        setSort([...sortData])
      }

      const handleSortL=()=>{
        let sortData=mainData?.sort((a,b)=>{
          return (a.price-b.price)
        })
        setSort([...sortData])
      }

      useEffect(()=>{
        setSort(mainData)
      },[mainData])


      const handleMale=()=>{
        let male=mainData.filter((item)=>{
          return item.for==="Men"
        })
        setSort(male)
      }

      const handleFemail=()=>{
        let femail=mainData.filter((item)=>{
          return item.for==="Women"
        })
        setSort(femail)
      }

      const handlePayment=()=>{
        navigate('/payment')
      }








  return (


    <>
    <Button onClick={handleSortH}>Sort H to L</Button>
    <Button onClick={handleSortL}>Sort H to L</Button>
    <Button onClick={handleMale}>Male</Button>
    <Button onClick={handleFemail}>Female</Button>

    <Button onClick={handleCart}>Cart</Button>
    <Button onClick={handleLogout}>LogOut</Button>
    <Link onClick={handlePayment}> To payment</Link>

    <>

    {sort?.map((item)=>(
      <>

<Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
       
        

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              John Doe
            </Heading>
            <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={item.image}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>
            <Text color={'gray.500'}>Frontend Developer</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
          </Stack>

          <Button onClick={()=>handleAddCart(item)}
            w={'full'}
            mt={8}
            bg={('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>
        </Box>
      </Box>
    </Center>
      
      
      
      </>
    ))}

</>
    

    </>
  )
}