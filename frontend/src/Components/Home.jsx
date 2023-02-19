import { Box, Button, Card, filter, FormControl, FormLabel, Heading, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Spinner, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FetchAllHotalData } from "../Store/store.action"
import { ShowAllHotel } from "./ShowHotalData/ShowHotel"

export const HomePage=()=>{
   const {HotelData,loading}=useSelector(store=>store.list)
   const dispatch=useDispatch()
   const [filtertext,setFilterText]=useState({status:"",location:"",price:"",type:""})
   const [allData,setAllData]=useState(HotelData)
   const [count,setCount]=useState(false)
   const [page,setPage]=useState(1)

    

//    Pagination handle here -------------------------------------------------------------------------------
    const handlePage=(e)=>{
        console.log(e)
         if(e=="s"){
            console.log(page)
            setPage(page-1)
         }
         if(e=="a"){
            setPage(page=>page+1)
         }
        if(e== +(e)){
            setPage(+(e))
         }
         
    }
    
    


// onLoad the window the data fetch --------------------------------------------------------------
    useEffect(()=>{
         
     dispatch(FetchAllHotalData())
      setAllData(HotelData)
    },[])
  


// get filter data here--------------------------------------------------------------------
    const handleFilter=(e)=>{
        const {name,value}=e.target
         
        setFilterText({
            ...filtertext,
            [name]:value
        })

      
    }
     
     


 //  filter  functionality handle --------------------------------------------------------   
    const SubmitFilter=()=>{
         setPage(1)
         console.log(filtertext)
        let [greater,less]=filtertext.price.split("-")
        let loc=filtertext.location.toUpperCase()
        let filterType=filtertext.type.toUpperCase()    

        const tempFilter=HotelData.filter((el)=>{
                 
                   let ctry=el.country.toUpperCase()
                   let cty=el.city.toUpperCase()
                   let typ=el.type.toUpperCase()
                   
           return   (filtertext.type ? typ==filterType : el.type!=="null")  && (filtertext.price!=="" ? (el.price > greater &&   el.price < less) : el.price > 0) && (filtertext.location!=="" ? (ctry==loc || cty==loc) : el.country!=="abc")  && (filtertext.status!=="" ? (el.status==+(filtertext.status) ) : el.status>=0) 
          
        })
       
        setAllData(tempFilter)
    } 


 
    //  Sort functionality handle --------------------------------------------------------
     const handleSort=(e)=>{
            const sortby=e.target.value
            let datas=allData.length>0 ? allData : HotelData
            if(sortby=="asc"){
               datas.sort((a,b)=>{
                    return a.price-b.price
                })
            }
            else{
                datas.sort((a,b)=>{
                    return b.price-a.price
                })
            }
            setCount(!count)
     }
  


     useEffect(()=>{
        setAllData(allData)
     },[count])

    return(
        <>
            <Box alignItems="center" textAlign="center"  h="100px" mt={["20px","30px","30px"]} m="auto" w={{ base: '80%', sm: '90%', md: '90%' }} display={{ base:"flex",md:"flex",sm:"block"}}>
                <Heading size="lg">Buy,rent or sell your property easily</Heading>
                 
                <Stack onChange={handleSort}  m="auto" mr={{base:"0%",md:"0%",sm:"auto"}} mt="3%" w={{ base: '20%', sm: '40%', md: '30%' }}  >
                    <Select placeholder='Sort by price' variant='outline'>
                        <option value='asc'>Low to High</option>
                        <option value='desc'>High to Low</option>
                    </Select>
                </Stack>
            </Box>



            {/* Filter Boxes ------------------------------------------------ */}

       <HStack spacing='0px' w={{sm: '90%',md: '90%',lg: '80%',xl: '80%',}} borderRadius="6px" m="auto" mt="30px" h="130px" display={{base:"none" , md:"flex"}}>
               
                <Card borderRadius="0px" h="100%"  w="20%">
                    <FormControl m="auto" >
                        <FormLabel ml="8%" >Location</FormLabel>
                        <Input onChange={handleFilter} name="location" w="80%" ml="5%" type='text' />
                    </FormControl>
                </Card>

                <Card  borderRadius="0px" h="100%"  w="20%">
                    <FormControl m="auto" >
                        <FormLabel  ml="8%">Status</FormLabel>
                        <Select onChange={handleFilter} name="status" w="80%" ml="5%" placeholder='Select Amount'>
                            <option value='1'>Active</option>
                            <option value='0'>Booked</option>
                    </Select>
                    </FormControl>
                   
                </Card>

                <Card  borderRadius="0px" h="100%"  w="20%">
                     
                <FormControl m="auto"  >
                    <FormLabel  ml="8%">Amount</FormLabel>
                    
                     <Select onChange={handleFilter} name="price" w="80%" ml="5%" placeholder='Select Amount'>
                            <option value='1000-3000'>1000-3000</option>
                            <option value='3000-6000'>3000-6000</option>
                            <option value='6000-9000'>6000-9000</option>
                            <option value='9000-11111'>more than 9000</option>
                    </Select>
                   
                </FormControl>
                    
                </Card>



                <Card  borderRadius="0px" h="100%"  w="20%">
                    <FormControl m="auto" >
                    <FormLabel  ml="8%" >Property type</FormLabel>
                        <Select  onChange={handleFilter} name="type" w="80%" ml="5%" placeholder='Select Type'>
                            <option value='laser'>Laser</option>
                            <option value='maestro'>Maestro</option>
                            <option value='mastercard'>Mastercard</option>
                            
                        </Select>
                    </FormControl>
                   
                </Card>

                <Card  borderRadius="0px" h="100%" w="20%">
                     
                     <Button onClick={SubmitFilter} m="auto" size='lg' colorScheme="messenger">Search</Button>
                   
                </Card>
       </HStack>


      
       {loading ? <Spinner ml="50%" mt="20px" thickness='6px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' /> : ""}
      

       {/* Show All data -------------------- */}
           
           { allData.length>0 ? <ShowAllHotel page={page} handlePage={handlePage} props={allData}/> : <ShowAllHotel handlePage={handlePage} page={page} props={HotelData}/>}
         
        </>
    )
}