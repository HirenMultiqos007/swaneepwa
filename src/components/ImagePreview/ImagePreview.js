import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ImagePreview = ({imagezoom,show,setShow}) => {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
       <Modal show={show} onHide={handleClose} className="custom-modal" centered>
        <Modal.Header closeButton >
        </Modal.Header>
        <Modal.Body>
            <div className='full-image-show'><img src={imagezoom} alt="zoom-images"/></div></Modal.Body>
      </Modal>
    </div>
  )
}

export default ImagePreview
