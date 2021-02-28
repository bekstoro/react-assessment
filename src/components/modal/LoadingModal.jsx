import React from 'react';
import PropTypes from 'prop-types';

import Portal from '@components/portal/Portal';
import { LoadingIcon, LoadingText, SmallModalCentered } from '@components/styled-components/Modal';

export default function LoadingModal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <Portal closeModal={closeModal}>
      <SmallModalCentered>
        <LoadingIcon />
        <LoadingText>Data is loading</LoadingText>
      </SmallModalCentered>
    </Portal>
  );
}

LoadingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};
