import React from 'react';
import { render } from '@testing-library/react';

import LoadingModal from '@components/modal/LoadingModal';

describe('LoadingModal', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'app');
    document.body.appendChild(modalRoot);
  });

  it('LoadingModal renders correctly', () => {
    const { container } = render(<LoadingModal isOpen closeModal={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
