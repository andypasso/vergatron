import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer
} from "@chakra-ui/react"
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <Flex bg='teal'color='white' align="center" justify="center" >
                <Box p='4' fontSize={32} fontWeight="bold">
                    <Link to="/" >Computer Store</Link>
                </Box>
                <Spacer />
                <Box p='4' >
                    <Menu>
                        <MenuButton fontSize={32} fontWeight="bold">
                            Categories
                        </MenuButton>
                        <MenuList>
                            <MenuItem color='black'> <Link to="/category/monitores">Monitores</Link></MenuItem>
                            <MenuItem color='black'> <Link to="/category/gabinetes">Gabinetes</Link></MenuItem>
                            <MenuItem color='black'> <Link to="/category/parlantes">Parlantes</Link></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4' >
                    <Link to="/cart" fontSize={32} fontWeight="bold">
                        <CartWidget />
                    </Link>

                </Box>
            </Flex>
        </div>
    )
}

export default NavBar