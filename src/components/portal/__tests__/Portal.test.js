import React from 'react';
import { render } from '@testing-library/react';

import Portal from '@components/portal/Portal';
import { BaseModal } from '@components/styled-components/Modal';

describe('Portal', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'app');
    document.body.appendChild(modalRoot);
  });

  it('Portal renders correctly', () => {
    const { container } = render(<Portal closeModal={() => {}}><BaseModal /></Portal>);
    expect(container).toMatchSnapshot();
  });
});
