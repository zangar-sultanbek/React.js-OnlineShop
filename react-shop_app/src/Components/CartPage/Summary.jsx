import React, { useState } from 'react'
import summaryCSS from './Summary.module.css'

const Summary = ({totalCost, totalCount, setIsFormModalOpen}) => {
  // const [isSummaryOpen, setIsSummaryOpen] = useState(() => false);

  return (
    <div className={summaryCSS.summary_box}>
        <div className={summaryCSS.summary_content}>
            <div className={summaryCSS.summary_info}>
                <span>Total cost:</span>
                <h3>{totalCost}.00$</h3>
            </div>
            <div className={summaryCSS.summary_info}>
                <span>Amount:</span>
                <h3>{totalCount}</h3>
            </div>
        </div>
        <button 
        className={summaryCSS.summary_submit_btn}
        onClick={() => setIsFormModalOpen(true)}>Purchase</button>
    </div>
  )
}

export default Summary