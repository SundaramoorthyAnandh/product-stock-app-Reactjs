import React from 'react'

import SearchBar from './SearchBar/SearchBar'
import ProductTable from './ProductTable/ProductTable'
import CheckBox from './SearchBar/CheckBox/CheckBox'


import './FilterableProductTable.css'
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            value: ''
        }
    }

    checkboxHandler = () => {
        let checked = this.state.checked;
        this.setState({
            checked: !checked
        });
    }

    searchboxHandler = (ev) => {
        this.setState({value: ev.target.value})
    }

    render() {
        
        return (<span>
            <h2 className="filterable-product-table">{this.props.name}</h2>
            <SearchBar change={this.searchboxHandler}/>
            <CheckBox text="Show only the products in stock" value={this.state.checked} clicked={this.checkboxHandler}/>
            <table className='App Table'>
            <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody><ProductTable products={this.props.products} ischecked={this.state.checked} searchvalue={this.state.value}/></tbody>
            </table>
        </span>)
    }
}

export default FilterableProductTable;