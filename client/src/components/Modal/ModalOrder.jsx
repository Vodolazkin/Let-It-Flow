import React from 'react';

function ModalOrder({handleClose, setOpen}) {
  return (
    <div>
    <div className='modal-order'>
        <div className='modal-order-dialog'>
          <div className='modal-order-close'>
            <button className='modal-order-button' onClick={handleClose}>
              <svg width="55px" height="54px" viewBox="0 0 55 54">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Cancel" transform="translate(0.000000, -1.000000)" fill="#000000">
                        <rect id="Rectangle-path" transform="translate(27.961245, 28.014445) rotate(45.000000) translate(-27.961245, -28.014445) " x="-8.78840257" y="26.5144594" width="73.4992951" height="2.99997123"></rect>
                        <rect id="Rectangle-path" transform="translate(27.890535, 28.014445) rotate(45.000000) translate(-27.890535, -28.014445) " x="26.3905494" y="-8.73520257" width="2.99997123" height="73.4992951"></rect>
                    </g>
                </g>
              </svg>
            </button>
          </div>
        <p className='modal-order-text'>Заказ офoрмлен!</p>
        </div>
      </div> 
      </div>
  );
}

export default ModalOrder;