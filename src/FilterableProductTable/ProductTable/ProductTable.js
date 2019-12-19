import React from 'react';
// import CheckBox from '../SearchBar/CheckBox/CheckBox';
import ProductRow from './ProductRow/ProductRow';
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow'
import _ from 'underscore';

const productTable = (props) => {
 
    let _searchval = props.searchvalue;
    let products = _.sortBy(props.products, "name");
    let products_table = [];
    // products_table.push(<CheckBox text="Show only the products in stock" value={this.state.checked} clicked={this.checkboxHandler} />);
    let prevCategory = '';
    products.forEach((product) => {
        if (_searchval.length<=0) {
            if (!props.ischecked) {
                if (prevCategory !== product.category) {
                    products_table.push(<ProductCategoryRow category={product.category} />);
                    prevCategory = product.category;
                }
                products_table.push(<ProductRow product={product} key={product.name} />);
            } else {
                if (product.stocked) {
                    if (prevCategory !== product.category) {
                        products_table.push(<ProductCategoryRow category={product.category} />);
                        prevCategory = product.category;
                    }
                    products_table.push(<ProductRow product={product} key={product.name} />);
                }
            }
        } else if (_searchval.length > 0) {
            let searched_val_exist = product.name.toLowerCase().search(_searchval.trim().toLowerCase());
            if (searched_val_exist !== -1) {
                if (!props.ischecked) {
                    if (prevCategory !== product.category) {
                        products_table.push(<ProductCategoryRow category={product.category} />);
                        prevCategory = product.category;
                    }
                    products_table.push(<ProductRow product={product} key={product.name} />);
                } else {
                    if (product.stocked) {
                        if (prevCategory !== product.category) {
                            products_table.push(<ProductCategoryRow category={product.category} />);
                            prevCategory = product.category;
                        }
                        products_table.push(<ProductRow product={product} key={product.name} />);
                    }
                }
            }
        }
        
        
    });
    return (products_table);
  }

export default productTable;