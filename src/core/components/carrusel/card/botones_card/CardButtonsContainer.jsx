

import React from 'react'
import Reproduce from './Reproduce'
import Add from './Add'
import Thumbsup from './Thumbsup'
import Information from './Information'

const CardButtonsContainer = ({ children }) => {
  return (
    <div className='d-flex justify-content-between'>
      <div className='row gx-3'>
        <div className="col">
          <Reproduce />
        </div>
        <div className="col">
          {/* <Add /> */}
          {children}
        </div>
        <div className="col">
          <Thumbsup />
        </div>
      </div>
      <div>
        <Information />
      </div>
    </div>
  )
}

const AddButton = ({ children, ...props }) => {
  return <Add {...props} />
}

CardButtonsContainer.AddButton = AddButton;


export default CardButtonsContainer