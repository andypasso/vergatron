import React from "react";
import Item from './Item'

const ItemList = ({ products }) => {
    console.log(products)
    return (
        <div>
            {
                products.map((p) =>{
                    return (
                        <Item key={p.id} product={p} />
                    )

                })
            }
        </div>
    )
}

export default ItemList