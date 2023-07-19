

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  
  export const Carcard=({image,name,maxSpeed,price,mileage,power})=> {
    return (
      <Center >
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
       >
          <Box
            >
            <Image
              height={230}
              width={"100%"}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {name}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'} >
              Power: {power}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={300}>
                Max-Speed: {maxSpeed}km/hr
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'md'}>
                  Price: ₹{price}
              </Text>
              <Text  color={'gray.600'}>
            Mileage:{mileage}km
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }

//   colors
// : 
// (3) ['red', 'grey', 'black']
// image
// : 
// "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/FRONX/9243/1673943130006/front-left-side-47.jpg?tr=w-456"
// maxSpeed
// : 
// 500
// mileage
// : 
// 10
// name
// : 
// "Maruti FRONX"
// power
// : 
// 500
// price
// : 
// 50000
// year
// : 
// "2008-08-02T00:00:00.000Z"
// __v
// : 
// 0
// _id
// : 
// "64b7e2982dd007511aa1c832"
// [[Prototype]]
// : 
// Object