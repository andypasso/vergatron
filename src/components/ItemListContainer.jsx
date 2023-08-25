import { Flex } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
        <div className='ItemListContainer'>
          <Flex className='Greeting'>
            <h1>{greeting}</h1>
          </Flex>
        </div>
  )
}

export default ItemListContainer