import React from 'react';
import { render } from '@testing-library/react';

import TaskOne from '@components/taskone/TaskOne';

describe('TaskOne', () => {
  it('TaskOne renders correctly', () => {
    const { container } = render(<TaskOne />);
    expect(container).toMatchSnapshot();
  });
});
