import React from 'react';
import PropTypes from 'prop-types';

import Portal from '@components/portal/Portal';
import {
  ModalButtons,
  ModalCancellationButton,
  ModalConfirmationButton,
  ModalText,
  ModalTitle,
  RedIcon,
  SmallModal,
} from '@components/styled-components/Modal';

export default function ConfirmationModal({
  cancellationButtonText,
  confirmationButtonText,
  isOpen,
  message,
  title,
  closeModal,
  confirmModal,
}) {
  if (!isOpen) return null;

  return (
    <Portal closeModal={closeModal}>
      <SmallModal data-testid="confirmation-modal">
        <ModalTitle>
          <RedIcon className="material-icons">warning</RedIcon>
          {title}
        </ModalTitle>
        <ModalText>{message}</ModalText>
        <ModalButtons>
          <ModalConfirmationButton
            onClick={() => {
              confirmModal();
              closeModal();
            }}
          >
            {confirmationButtonText}
          </ModalConfirmationButton>
          <ModalCancellationButton onClick={closeModal}>
            {cancellationButtonText}
          </ModalCancellationButton>
        </ModalButtons>
      </SmallModal>
    </Portal>
  );
}

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  cancellationButtonText: PropTypes.string.isRequired,
  confirmationButtonText: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  confirmModal: PropTypes.func.isRequired,
};
