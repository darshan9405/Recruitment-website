import React from 'react'
import './modal.css'

function Modal ({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className='title'>
          <h1>Are you sure?</h1>
        </div>
        <div className='body'>
          <p> Do you want to delete company account?</p>
        </div>

        <div className='footer'>
          <button onClick={() => closeModal(false)} id='cancelbtn'>
            Cancel
          </button>
          <button className='btn' id='deletebtn'>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
