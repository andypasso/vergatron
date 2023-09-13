import React from "react";
import { useState } from "react";
import { Button, Flex, Text, Box, Spacer } from "@chakra-ui/react";

const ItemCount = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
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
            <Button
                colorScheme="teal"
                ml={4}
                onClick={decrement}
            >
                -
            </Button>
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
                onClick={increment}
            >
                +
            </Button>
        </Flex>
    );
}

export default ItemCount;
