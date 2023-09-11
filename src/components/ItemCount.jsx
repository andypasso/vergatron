import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";



const ItemCount = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>  
            <Button onClick={increment} >+</Button>
            <p> {count} </p>
            <Button onClick={decrement} >-</Button>        
        </div>
    )

}
export default ItemCount