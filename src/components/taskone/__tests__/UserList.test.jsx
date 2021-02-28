import React from 'react';
import { render } from '@testing-library/react';

import UserList from '@components/taskone/UserList';

describe('UserList', () => {
  it('UserList renders correctly', () => {
    const { container } = render(<UserList />);
    expect(container).toMatchSnapshot();
  });
});
