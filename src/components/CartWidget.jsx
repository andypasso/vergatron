import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
const CartWidget = () => {
  return (
    <div>
        <Flex>
            <Box p='4' >
                <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="cart" />
            </Box>
            <Spacer />
            <Box p='4' >
                <p>6</p>
            </Box>
        </Flex>
    </div>
  )
}

export default CartWidget