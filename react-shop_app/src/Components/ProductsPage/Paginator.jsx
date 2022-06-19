import React from 'react'
import paginatorCSS from './Paginator.module.css';

const Paginator = React.memo(({paginator, dispatchPaginator}) => {
  const pages = [];

  for(let i = 1; i <= paginator.pagesTotal(); i++){
      pages.push(i);
  }
  /*FIX - PRODUCTS KEEP RERENDERING IF PRESS THE BUTTON BECAUSE OF DISPATCHPAGINATOR*/

return (
  <div className={paginatorCSS.paginator_container}>
      {pages.map(pageIndex => 
          <button key={pageIndex} 
          className={pageIndex === paginator.currentPage ? paginatorCSS.paginator_btn_selected : paginatorCSS.paginator_btn}
          onClick={() => dispatchPaginator({type: 'setCurrentPage', payload: pageIndex})}>
              {pageIndex}</button>)}
  </div>
)
});

export default Paginator