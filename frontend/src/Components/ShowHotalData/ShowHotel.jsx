import { Badge, Box, Button, HStack, Image, SimpleGrid,Icon } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {ArrowLeftIcon,ArrowRightIcon} from "@chakra-ui/icons"



export const ShowAllHotel=({props,page,handlePage})=>{
    // Page limit an dskip data here -----------------------------------------------------------
     let start=page * 12 -12
     let end=page*12    

    
//   console.log(page,props.length)

    return(
        <>

        {/* Show all the hotel card in grid layout --------------------------------------------------------------------------------------- */}
        <SimpleGrid columns={[1, 2, 3]} spacing='40px'  w="75%" m="auto">

            {props && props.slice(start,end).map((el,i)=>{
             
            

                return(
                    <>

                            
                  <Box  m="auto" mt="30px" key={el._id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >

                        <Image h="200px" src={el.titleImage} alt={el.name}/>

                        <Box p="6" >
                        <Box  display='flex' alignItems='baseline' >
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                                {el.status=="1" ? "Active" : "Booked"}
                            </Badge>

                            <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                                {el.bed} beds &bull, {el.bathroom} baths   
                            </Box>
                        </Box>
                    

                        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1} >
                        {el.name}
                        </Box>

                        <Box mt="1" color="blue">
                            ${el.price}
                            <Box as='span' color='gray.600' fontSize='sm'>
                            / month
                            </Box>
                        </Box>

                        <Box mt="1" color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="md" textTransform="uppercase"  noOfLines={1}>
                              {el.streetAddress}   
                       </Box>

                   <Link to={`/details/${i}`}> <Button mt="2"  colorScheme='messenger' >Quick View</Button></Link>  

                    </Box>  

                    </Box>
                    </>
                )})}  
        </SimpleGrid>







          {/*Pagination -----------------------------------------------------  */}
        
          {props.length> 0 && (
             <HStack   w={[300, 400, 500]} m="auto" mt="20px" h="70px" alignItems="center">
                
            {props.length>12 &&   <Button isDisabled={page==1} onClick={()=>handlePage("s")}><Icon as={ArrowLeftIcon} /></Button>}
                    {[...Array(Math.floor(props.length/12))].map((el,i)=>{
                        
                        return (
                                <Button colorScheme={page==i+1 ? "blue" : "gray"} onClick={()=>handlePage(i+1)}>{i+1}</Button>
                        )
                    })}

           {props.length>12 &&  <Button isDisabled={page==(Math.floor(props.length/12))} onClick={()=>handlePage("a")}><Icon  as={ArrowRightIcon} /></Button>}
             </HStack>
         )} 


        </>
    )
}