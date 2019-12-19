import React from 'react';
import './ProductRow.css';

const ProductRow = (props) => {
    let _class = ''
    if (!props.product.stocked) {
       _class += "outofstock"
    }
    return (
        <tr>
            <td className={_class}>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    );
}

export default ProductRow;
