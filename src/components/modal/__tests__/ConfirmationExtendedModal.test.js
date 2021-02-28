import React from 'react';
import { render, within } from '@testing-library/react';

import ConfirmationExtendedModal from '@components/modal/ConfirmationExtendedModal';

describe('ConfirmationExtendedModal', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'app');
    document.body.appendChild(modalRoot);
  });

  it('ConfirmationExtendedModal renders correctly', () => {
    render(
      <ConfirmationExtendedModal
        confirmModal={jest.fn()}
        confirmationButtonText=""
        cancellationButtonText=""
        closeModal={jest.fn()}
        isOpen
        message={<section />}
        title=""
      />
    );
    const { getByTestId } = within(document.getElementById('app'));
    expect(getByTestId('confirmation-extended-modal')).toMatchSnapshot();
  });

  it('ConfirmationExtendedModal should return empty div', () => {
    const { container } = render(
      <ConfirmationExtendedModal
        confirmModal={jest.fn()}
        confirmationButtonText=""
        cancellationButtonText=""
        closeModal={jest.fn()}
        isOpen={false}
        message={<section />}
        title=""
      />
    );
    expect(container).toMatchSnapshot();
  });
});
