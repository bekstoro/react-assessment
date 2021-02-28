import React from 'react';
import { render, within } from '@testing-library/react';

import LoadingModal from '@components/modal/LoadingModal';

describe('LoadingModal', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'app');
    document.body.appendChild(modalRoot);
  });

  it('LoadingModal renders correctly', () => {
    render(<LoadingModal isOpen closeModal={jest.fn()} />);
    const { getByTestId } = within(document.getElementById('app'));
    expect(getByTestId('loading-modal')).toMatchSnapshot();
  });

  it('LoadingModal should return empty div', () => {
    const { container } = render(<LoadingModal isOpen={false} closeModal={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
