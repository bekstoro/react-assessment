import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import {
  BlueButton,
  Button,
  Content,
  GreenButton,
  Heading,
  RedButton,
  Task,
} from '@components/styled-components/Task';

describe('Task styled components', () => {
  it('Task renders correctly', () => {
    const { container } = render(<Task />);
    expect(container).toMatchSnapshot();
  });

  it('Heading renders correctly', () => {
    const { container } = render(<Heading />);
    expect(container).toMatchSnapshot();
  });

  it('Button renders correctly', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });

  it('RedButton renders correctly', () => {
    const { container } = render(<RedButton />);
    expect(container).toMatchSnapshot();
  });

  it('GreenButton renders correctly', () => {
    const { container } = render(<GreenButton />);
    expect(container).toMatchSnapshot();
  });

  it('BlueButton renders correctly', () => {
    const { container } = render(<BlueButton />);
    expect(container).toMatchSnapshot();
  });

  it('Content renders correctly', () => {
    const { container } = render(<Content />);
    expect(container).toMatchSnapshot();
  });
});
