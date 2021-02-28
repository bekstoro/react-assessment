import React from 'react';
import { render } from '@testing-library/react';

import ConfirmationModal from '@components/modal/ConfirmationModal';

describe('ConfirmationModal', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'app');
    document.body.appendChild(modalRoot);
  });

  it('ConfirmationModal renders correctly', () => {
    const { container } = render(
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
    expect(container).toMatchSnapshot();
  });
});
