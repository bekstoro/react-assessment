import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import Nav from '@components/Nav';

describe('Nav', () => {
  it('Nav renders correctly', () => {
    const { container } = render(<Router><Nav /></Router>);
    expect(container).toMatchSnapshot();
  });
});
