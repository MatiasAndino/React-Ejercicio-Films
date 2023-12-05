

import React from 'react'
import Reproduce from './Reproduce'
import Add from './Add'
import Thumbsup from './Thumbsup'
import Information from './Information'

const CardButtonsContainer = () => {
  return (
      <div className='d-flex justify-content-between'>
        <div className='row gx-3'>
          <div className="col">
            <Reproduce />
          </div>
          <div className="col">
            <Add />
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

export default CardButtonsContainer