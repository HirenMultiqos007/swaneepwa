import React from 'react'
import { Modal } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ReactComponent as DeleteRedIcon } from '../../assets/icons/delete-red-icon.svg'

const DeleteModal = ({
    showDeleteModal,
    setshowDeleteModal,
    deleteId
}) => {
    const handleClose = () => setshowDeleteModal(false)
    const { t } = useTranslation()
const handleSubmit=(deleteId)=>{

    handleClose()
}
    return (
        <>
            <Modal
                show={showDeleteModal}
                onHide={handleClose}
                centered
                className="custom-modal"
                data-dismiss="modal"
                data-toggle="modal"
                id="Delete"
                autoFocus
                backdrop="static"
                // keyboard={false}
            >
                <Modal.Body>
                    <div className='delete-content'>
                        <div className='icon-wrapper'>
                            <DeleteRedIcon />
                        </div>
                        <div className="title">
                            Do you want to delete your address?
                        </div>
                        <div className='button-wrapper'>
                              <button type='submit' className='common-btn border-btn' onClick={handleClose}>No</button>
                              <button type='submit' className='common-btn'onClick={handleSubmit}>Yes</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default DeleteModal