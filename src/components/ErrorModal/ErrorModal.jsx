import React from "react";
import { Modal } from "reactstrap";
import "./ErrorModal.scss";

const ErrorModal = () => {
  return (
    <Modal isOpen={true} centered contentClassName="error-modal">
      <div className="error-modal__body">
        <div className="error-modal__icon">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
            <path
              d="M12 8v5M12 16.5v.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div>
          <h3>No path found</h3>
          <p>The target is walled off. Clear some walls and try again.</p>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;
