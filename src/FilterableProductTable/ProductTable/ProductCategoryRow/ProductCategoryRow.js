import React from 'react';
import './ProductCategoryRow.css'
const productCategoryRow = (props) => {
    return (
        <tr>
            <td colSpan="2" className="category-row">{props.category}</td>
        </tr>); 
}

export default productCategoryRow;