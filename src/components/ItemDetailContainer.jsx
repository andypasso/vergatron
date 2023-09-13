// src/components/ItemDetailContainer.js
import React from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer({ products }) {

    const { id } = useParams();    // Usar el ID para obtener detalles del item, por ejemplo, getItemDetails(id)
    const [product, setProduct] = React.useState(null);
    React.useEffect(() => {
        // Encuentra el producto basado en el ID desde la URL
        const product = products.find(prod => prod.id === parseInt(id, 10));
        setProduct(product);
    }, [id]);

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer;
