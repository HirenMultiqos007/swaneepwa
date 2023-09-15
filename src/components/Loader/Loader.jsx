import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
   <>
    <div className='site-loging'>
        <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" />
    </div>
   </>
  )
}

export default Loader

