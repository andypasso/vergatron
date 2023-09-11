import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center } from '@chakra-ui/react';
import ItemCount from "./ItemCount";
import products from "./Products";

const ItemDetail = ({ products }) => {

    return (
        <div>
            {products.map((p) => {
                return (
                    // Esto lo vamos a poner como detalle del item
                    <div key={p.id} >
                        <Center p='1rem' >
                            <Card>
                                <CardHeader>
                                    <Heading size="md">{p.name}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>{p.description}</Text>
                                    <Text>{p.category}</Text>
                                </CardBody>
                                <CardFooter>
                                    <ItemCount />
                                </CardFooter>
                            </Card>
                        </Center>
                    </div>
                )
            })
            }
        </div>
    )

}
export default React.memo(ItemDetail)