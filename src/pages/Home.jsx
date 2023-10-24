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
} from '@chakra-ui/react'
import { getData, postCart } from '../redux/data/action'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {


  const mainData=useSelector((store)=>store.data.data)
      const dispatch=useDispatch()
  
      console.log("mainData",mainData)
  
  
      useEffect(()=>{
          dispatch(getData())
      },[])


      const handleAddCart=(item)=>{
        item.quant=1
          dispatch(postCart(item))
      }




  return (


    <>

    {mainData?.map((item)=>(
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
  )
}