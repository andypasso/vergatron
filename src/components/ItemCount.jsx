import React, { useState } from "react";
import { Button, Flex, Text, Box, Spacer } from "@chakra-ui/react";
import { useCart } from '../context/CartContext'; 

const ItemCount = ({ item }) => {
    const [count, setCount] = useState(0);
    const { addToCart } = useCart(); // Trae el addToCart del CartContext

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            bg="gray.100"
            p={4}
            borderRadius="md"
            boxShadow="sm"
        >
            <Box
                borderWidth="1px"
                borderRadius="md"
                p={2}
                fontWeight="bold"
            >
                <Text fontSize="xl">{count}</Text>
            </Box>
            <Button
                colorScheme="teal"
                mr={4}
                onClick={() => {
                    increment();
                    addToCart(item);
                }}
            >
                +
            </Button>
        </Flex>
    );
}

export default ItemCount;