import { Flex } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <Flex>
        <h1>{greeting}</h1>
    </Flex>
  )
}

export default ItemListContainer