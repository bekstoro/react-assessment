import React, { useState } from 'react';

import {
  BlueButton,
  Content,
  GreenButton,
  Heading,
  RedButton,
  Task,
} from '@components/styled-components/Task';
import ConfirmationModal from '@components/modal/ConfirmationModal';
import LoadingModal from '@components/modal/LoadingModal';
import ConfirmationExtendedModal from '@components/modal/ConfirmationExtendedModal';
import { CONFIRMATION_DETAILS } from '@constants';

const TaskTwo = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showConfirmationExtendedModal, setShowConfirmationExtendedModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  const confirmModal = () => {
    console.log('Files are deleted');
  };

  return (
    <Task>
      <Heading>Task Two</Heading>
      <Content>
        <RedButton onClick={() => setShowLoadingModal(true)}>
          open loading modal
        </RedButton>
        <GreenButton onClick={() => setShowConfirmationModal(true)}>
          open confirmation modal
        </GreenButton>
        <BlueButton onClick={() => setShowConfirmationExtendedModal(true)}>
          open confirmation extended modal
        </BlueButton>
      </Content>
      <LoadingModal
        isOpen={showLoadingModal}
        closeModal={() => setShowLoadingModal(false)}
      />
      <ConfirmationModal
        cancellationButtonText="No"
        confirmationButtonText="Yes"
        isOpen={showConfirmationModal}
        message="This action cannot be undone"
        title="Are you sure you want to delete all of your files?"
        closeModal={() => setShowConfirmationModal(false)}
        confirmModal={confirmModal}
      />
      <ConfirmationExtendedModal
        cancellationButtonText="Cancel"
        confirmationButtonText="Delete all"
        isOpen={showConfirmationExtendedModal}
        message={(
          <>
            <p>
              If you delete the
              &nbsp;
              <b>Executive metrics</b>
              &nbsp;
              report, you will also delete the associated history:
            </p>
            <textarea defaultValue={CONFIRMATION_DETAILS} readOnly />
            <p>
              Please type the word &apos;Delete&apos; to remove the
              &nbsp;
              <b>Executive metrics</b>
              &nbsp;
              report and its associated history:
            </p>
          </>
        )}
        title="Are you sure you want to delete this report and its history?"
        closeModal={() => setShowConfirmationExtendedModal(false)}
        confirmModal={confirmModal}
      />
    </Task>
  );
};

export default TaskTwo;
