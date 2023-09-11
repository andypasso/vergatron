import React from "react";
import { Card, Image, Stack, Text, CardBody, Divider , Button, ButtonGroup, CardFooter, Heading, Center, CardHeader,  } from '@chakra-ui/react';
import ItemCount from "./ItemCount";

const Item = ({ product }) => {
    const [showDetails, setShowDetails] = React.useState(false)
    const toggleDetails = () => setShowDetails(!showDetails)
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={product.image}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3' >
                        <Heading size='md' >{product.name}</Heading>
                        <Text>
                        </Text>
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button onClick={ toggleDetails } variant='solid' colorScheme="teal">
                            See Detail
                        </Button>
                        
                        {
                            showDetails && (
                                // Esto lo vamos a poner en un componente a parte
                                <div key={product.id} >
                                <Center p='1rem' >
                                    <Card>
                                        <CardHeader>
                                            <Heading size="md">{product.name}</Heading>
                                        </CardHeader>
                                        <CardBody>
                                            <Text>{product.description}</Text>
                                            <Text>{product.category}</Text>
                                        </CardBody>
                                        <CardFooter>
                                            <ItemCount />
                                        </CardFooter>
                                    </Card>
                                </Center>
                            </div>
        
                            )
                        }
                    </ButtonGroup>
                </CardFooter>        
            </Card>
        </div>
    )




}
export default Item