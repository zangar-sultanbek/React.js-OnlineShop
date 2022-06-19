import React, { useMemo, useReducer, useState } from 'react'
import productsCSS from './Products.module.css'
import Product from './Product';
import Paginator from './Paginator';
import Select from './Select';

const paginatorReducer = (state, action) => {
  switch(action.type){
      case 'setCurrentPage':
        return {...state, currentPage : action.payload};
      case 'setProductsPerPage':
        return {...state, productsPerPage : action.payload};
      default:
        return state;
  }
}

const Products = React.memo(({products}) => {
  const [sortQuery, setSortQuery] = useState(() => '');
  const [searchQuery, setSearchQuery] = useState(() => '');
  const [paginator, dispatchPaginator] = useReducer(paginatorReducer, 
    {
      currentPage : 1,
      productsPerPage: 6,
      productsTotal: products.length,
      pagesTotal(){return Math.floor(this.productsTotal / this.productsPerPage)}
    });
    const slicedArray = useMemo(
      () => products.slice((
        paginator.currentPage * paginator.productsPerPage) - paginator.productsPerPage, 
        paginator.currentPage * paginator.productsPerPage)
      , [paginator.currentPage, paginator.productsPerPage]
    );
    const sortedArray = useMemo(
      () => {
        let arrToReturn = [];
        switch(sortQuery){
          case 'title':
            arrToReturn = [...slicedArray].sort((a, b) => {
              if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1;
              }else if(a.title > b.title){
                return 1;
              }
              return 0;
              })
            break;
          case 'rating':
            arrToReturn = [...slicedArray].sort((a, b) => (b.rating - a.rating));
            break;
          case 'cost_inc':
            arrToReturn = [...slicedArray].sort((a, b) => (a.price - b.price));
            break;
          case 'cost_dec':
            arrToReturn = [...slicedArray].sort((a, b) => (a.price - b.price)).reverse();
            break;
          default:
            arrToReturn = slicedArray;
            break;
          }
          return arrToReturn.filter(filterProducts);
      }
      , [slicedArray, searchQuery, sortQuery]
    );
    
    const dataForSelects = useMemo(
      () => {
        return {
          sortData: {
            defaultOption : {value: '', body: 'Sort by:'},
            options : 
              [
                {value: 'title', body: 'title'},
                {value: 'cost_inc', body: 'cost(increase)'},
                {value: 'cost_dec', body: 'cost(decrease)'},
                {value: 'rating', body: 'rating'},
              ],
              onChange(e){
                setSortQuery(e.target.value)
              }
          },
          showData: {
            defaultOption : {value: '', body: 'Show products:'},
            options : 
              [
                {value: '6', body: '6'},
                {value: '10', body: '10'},
                {value: products.length, body: 'All'}
              ],
              onChange(e){
                dispatchPaginator({type: 'setCurrentPage', payload: 1});
                dispatchPaginator({type: 'setProductsPerPage', payload: e.target.value})
              }
          }
        }
      }, []
    );

  function filterProducts(product){
    return product.title.toLowerCase().includes(searchQuery.toLowerCase()) 
      || product.description.toLowerCase().includes(searchQuery.toLowerCase)
  }

  return (
    <div className={productsCSS.content_products}>
        <div className={productsCSS.actions_container}>
          <Select className={productsCSS.product_sort} value={sortQuery} onChange={dataForSelects.sortData.onChange}
            defaultOption={dataForSelects.sortData.defaultOption}
            options={dataForSelects.sortData.options}
          />

          <Select className={productsCSS.product_sort} value={paginator.productsPerPage} 
          onChange={dataForSelects.showData.onChange}
          defaultOption={dataForSelects.showData.defaultOption}
          options={dataForSelects.showData.options}
          />

          <input type='text' placeholder='Search...' onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>
        <div className={productsCSS.products_all}>
            {sortedArray.map(product => 
            <Product 
                key={product.id}
                {...product}/>)}
        </div>
        <Paginator paginator={paginator} dispatchPaginator={dispatchPaginator}/>
    </div>
  )
});

export default Products