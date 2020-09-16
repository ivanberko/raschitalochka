import React, { Component } from 'react';

import CategoryList from './CategoryList/CategoryList';
import category from '../db/category.json';
import Categories from './NameCategories/NameCategories';
import Total from './TotalAll/TotalAll';
import Select from './SelectList/SelectList'



export default class App extends Component {

  render() {
   
    return (
        <>
        <Select />
        <Categories />
        <CategoryList category={category}/>
        <Total />
      </>
    );
  }
}
