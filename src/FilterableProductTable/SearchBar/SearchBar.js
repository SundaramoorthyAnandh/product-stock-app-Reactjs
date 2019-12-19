import React from 'react';
import './SearchBar.css'

const searchBar = (props) => <input type="text" placeholder="Enter the product name to search" onChange={props.change}/> 

export default searchBar;