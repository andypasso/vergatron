import React from 'react'
import { 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem, 
    Flex, Box, Spacer } from "@chakra-ui/react"
import CartWidget from './CartWidget'
const NavBar = () => {
  return (
    <div className='NavBar'>
        <Flex>
            <Box p='4' className='Logo' >
            {/* <h3>Computer Store</h3> */}
            </Box>
            <Spacer />
            <Box p='4' className='Menu' >
                <Menu>
                    <MenuButton>
                        Lists
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Monitores</MenuItem>
                        <MenuItem>Gabinetes</MenuItem>
                        <MenuItem>Parlantes</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box p='4' className='Cart' >
            <CartWidget />
            </Box>
        </Flex>
    </div>
  )
}

export default NavBar