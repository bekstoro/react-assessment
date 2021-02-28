import React from 'react';
import { render, within } from '@testing-library/react';

import ConfirmationModal from '@components/modal/ConfirmationModal';

describe('ConfirmationModal', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'app');
    document.body.appendChild(modalRoot);
  });

  it('ConfirmationModal renders correctly', () => {
    render(
      <ConfirmationModal
        closeModal={jest.fn()}
        cancellationButtonText=""
        confirmationButtonText=""
        confirmModal={jest.fn()}
        isOpen
        message=""
        title=""
      />
    );
    const { getByTestId } = within(document.getElementById('app'));
    expect(getByTestId('confirmation-modal')).toMatchSnapshot();
  });

  it('ConfirmationModal should return empty div', () => {
    const { container } = render(
      <ConfirmationModal
        closeModal={jest.fn()}
        cancellationButtonText=""
        confirmationButtonText=""
        confirmModal={jest.fn()}
        isOpen={false}
        message=""
        title=""
      />
    );
    expect(container).toMatchSnapshot();
  });
});
