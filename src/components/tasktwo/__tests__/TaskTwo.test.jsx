import React from 'react';
import { render } from '@testing-library/react';

import TaskTwo from '@components/tasktwo/TaskTwo';

describe('TaskTwo', () => {
  it('TaskTwo renders correctly', () => {
    const { container } = render(<TaskTwo />);
    expect(container).toMatchSnapshot();
  });
});
