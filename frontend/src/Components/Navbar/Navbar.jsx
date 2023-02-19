import {  Image, Flex, Button,  HStack, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, DrawerContent, useDisclosure,Icon, VStack } from '@chakra-ui/react';
import React from "react";
import { Link } from "react-router-dom";
import { Navdata } from "./data";
import { HamburgerIcon } from  "@chakra-ui/icons"
import { Login } from '../LoginAndSign/Login';


export const Navbar=()=>{


    return(
        <>
        <Flex w="100%" px="7" py="5"  align="center" justify="space-around" boxShadow=" rgba(0, 0, 0, 0.16) 0px 1px 4px" >
       {/* // Logo */}
      <Link to="/"><Image w={{ base: '50%', lg: '50%' }} src="https://api.logo.com/api/v2/images?logo=logo_580f3ee0-9c0d-4b99-843b-8c6a7b99fa1e&format=webp&margins=0&quality=60&width=500&background=transparent&u=1676623942" h="50px" /></Link>
        
  {/* // Nav Items */}
        <HStack  display={{ base: "none", md: "flex" }}  >
                    {Navdata.map((item, i) => (
                        <Link key={i}>
                        <Button variant='ghost' color="black" colorScheme="messenger" > {item} </Button>
                        </Link>
                    ))}
       
        </HStack>

{/* // Call to action items */}
        <HStack>
          <Login/>
       {/* <Button variant="outline" colorScheme='messenger'> Login </Button> */}
       <Link to="/signup"> <Button colorScheme='messenger' > Sign up </Button></Link>  
           <MobileDrawer/>
        </HStack>
        
      </Flex>
        </>
    )
}



function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button display={{ base: "flex", md: "none" }} ref={btnRef} colorScheme='teal' onClick={onOpen}>
             <Icon as={HamburgerIcon} />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
            {/* <DrawerOverlay /> */}
            <DrawerContent  mt="100px" h="40%" overflow="hidden" w="30px">
           

            <DrawerBody >
                <VStack alignItems="right">
                {Navdata.map((item, i) => (
                    <Link key={i}>
                    <Button variant='text' > {item} </Button>
                    </Link>
                ))}
                </VStack>
        </DrawerBody>

        </DrawerContent>
        </Drawer>
      </>
    )
  }