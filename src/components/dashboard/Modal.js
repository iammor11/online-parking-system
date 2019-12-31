import React from 'react';

function Modal(){
  return(
    <div className="modal-dialog">
    <div className="modal-content">
  
    <div className="modal-header modaltext"><h4 className="modal-title">Thank You !!!</h4></div>
    
    <div className="modal-body modaltext">Your response has been submitted</div>
            
    <div className="modal-footer modaltext"><button type="button" className="btn btn-danger" data-dismiss="modal">Close</button></div>
    </div>
    </div>
)}
export default Modal;