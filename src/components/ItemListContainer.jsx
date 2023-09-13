import { Flex } from '@chakra-ui/react'
import React from 'react'
import Item from './Item'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ products }) => {

    const { id: categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = React.useState([]);

    React.useEffect(() => {
        if (categoryId) {
            const categoryProducts = products.filter(prod => prod.category.toLowerCase() === categoryId);
            console.log(categoryProducts);
            setFilteredProducts(categoryProducts);
        } else {
            setFilteredProducts(products);
        }
    }, [categoryId]);


    return (
        <div>
            {filteredProducts.map(item => <Item key={item.id} product={item} />)}
        </div>
    )
}

export default ItemListContainer