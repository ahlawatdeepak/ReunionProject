import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    useToast,
  } from '@chakra-ui/react';
  import { MdLocalShipping } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


  
  export default function SingleHotelDetails() {
    const Hoteldata=useSelector(store=>store.list.HotelData)
    const {id}=useParams()
    const toast = useToast()
    
    const data=Hoteldata[id]
       console.log(id,data)


    
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={data.name}
              src={
                data.titleImage
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
               {data.name}
              </Heading>
              <Text
                color={useColorModeValue('messenger', 'messenger')}
                fontWeight={300}
                fontSize={'2xl'} >
                ${data.price} /month
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                 {data.about}
                </Text>
                
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Bed</ListItem>
                    <ListItem>Bathroom</ListItem>{' '}
                    <ListItem>View</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Sea View</ListItem>
                    <ListItem>Room service</ListItem>
                    <ListItem>Chairs</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Bed :
                    </Text>{' '}
                     {data.bed}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Bathroom :
                    </Text>{' '}
                   {data.bathroom}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      price:
                    </Text>{' '}
                    ${data.price}/month
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Country:
                    </Text>{' '}
                    {data.country}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      City:
                    </Text>{' '}
                    {data.city}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Area:
                    </Text>{' '}
                    {data.area}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      startDate:
                    </Text>{' '}
                    {data.startDate}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Type:
                    </Text>{' '}
                    {data.type}{' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }} 
               
              onClick={() =>
                toast({
                  title: 'Apply Successfully.',
                  description: "We will inform you when process is Done",
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                })
              }>
              Apply Now
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>We will connect you later</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }