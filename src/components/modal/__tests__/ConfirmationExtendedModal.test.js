import React from 'react';
import { render } from '@testing-library/react';

import ConfirmationExtendedModal from '@components/modal/ConfirmationExtendedModal';

describe('ConfirmationExtendedModal', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'app');
    document.body.appendChild(modalRoot);
  });

  it('ConfirmationExtendedModal renders correctly', () => {
    const { container } = render(
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
    expect(container).toMatchSnapshot();
  });
});
