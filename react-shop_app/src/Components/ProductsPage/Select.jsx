import React from 'react'

const Select = React.memo(({defaultOption, options, ...extras}) => {
  return (
    <select {...extras}>
        <option value={defaultOption.value} disabled>{defaultOption.body}</option>
        {options.map(currentOption=> 
            <option key={currentOption.value} value={currentOption.value}>{currentOption.body}</option>)}
    </select>
  )
});

export default Select