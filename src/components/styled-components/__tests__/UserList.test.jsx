import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Row, UserInfo, Users } from '@components/styled-components/UserList';

describe('UserList styled components', () => {
  it('Row renders correctly', () => {
    const { container } = render(<Row />);
    expect(container).toMatchSnapshot();
  });

  it('UserInfo renders correctly', () => {
    const { container } = render(<UserInfo />);
    expect(container).toMatchSnapshot();
  });

  it('Users renders correctly', () => {
    const { container } = render(<Users />);
    expect(container).toMatchSnapshot();
  });
});
