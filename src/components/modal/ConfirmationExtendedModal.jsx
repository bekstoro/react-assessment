import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Portal from '@components/portal/Portal';
import {
  BigModal,
  ModalButtons,
  ModalCancellationButton,
  ModalConfirmationButton,
  ModalContent,
  ModalError,
  ModalInput,
  ModalTitle,
  RedIcon,
} from '@components/styled-components/Modal';
import { DELETE } from '@constants';

export default function ConfirmationExtendedModal({
  cancellationButtonText,
  confirmationButtonText,
  isOpen,
  message,
  title,
  closeModal,
  confirmModal,
}) {
  const [confirmValue, setConfirmValue] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  return (
    <Portal closeModal={closeModal}>
      <BigModal data-testid="confirmation-extended-modal">
        <ModalTitle>
          <RedIcon className="material-icons">warning</RedIcon>
          {title}
        </ModalTitle>
        <ModalContent>
          {message}
        </ModalContent>
        <ModalInput value={confirmValue} onChange={(e) => setConfirmValue(e.target.value)} />
        {error && <ModalError>Confirmation word is mismatched</ModalError>}
        <ModalButtons>
          <ModalConfirmationButton
            onClick={() => {
              if (confirmValue === DELETE) {
                confirmModal();
                closeModal();
                setError(false);
                setConfirmValue('');
              } else {
                setError(true);
              }
            }}
          >
            {confirmationButtonText}
          </ModalConfirmationButton>
          <ModalCancellationButton
            onClick={() => {
              closeModal();
              setConfirmValue('');
            }}
          >
            {cancellationButtonText}
          </ModalCancellationButton>
        </ModalButtons>
      </BigModal>
    </Portal>
  );
}

ConfirmationExtendedModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  cancellationButtonText: PropTypes.string.isRequired,
  confirmationButtonText: PropTypes.string.isRequired,
  message: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  confirmModal: PropTypes.func.isRequired,
};
