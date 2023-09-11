import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'


const ItemListContainer = () => {

  const products = [
    { id: 1, name: "Product 1", description:"Product 1 description", stock: 5, category: "A" },
    { id: 2, name: "Product 2", description:"Product 2 description", stock: 10, category: "A" },
    { id: 3, name: "Product 3", description:"Product 3 description", stock: 30, category: "B" },
    { id: 4, name: "Product 4", description:"Product 4 description", stock: 10, category: "B" },
    { id: 5, name: "Product 5", description:"Product 5 description", stock: 25, category: "C" },
    { id: 6, name: "Product 6", description:"Product 6 description", stock: 8, category: "C" },
]
const getProducts = new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        } else {
            reject(new Error("There are no products"))
        }
    })
    getProducts.then((res) => {
    }).catch((error) => {
        console.log(error)
    })
    return (
        <ItemList products={products} />
        )
}


//   const greeting = 'Bienvenidos a tu tienda de computadoras'
//   return (
//         <div className='ItemListContainer'>
//           <Flex className='Greeting'>
//             <h1>{greeting}</h1>
//           </Flex>
//         </div>
//   )
// }

export default ItemListContainer