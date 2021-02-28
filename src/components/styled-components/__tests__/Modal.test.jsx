import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import {
  BaseModal,
  BigModal,
  LoadingIcon,
  LoadingText,
  ModalButtons,
  ModalCancellationButton,
  ModalConfirmationButton,
  ModalContent,
  ModalError,
  ModalInput,
  ModalText,
  ModalTitle,
  RedIcon,
  SmallModal,
  SmallModalCentered,
} from '@components/styled-components/Modal';

describe('Modal styled components', () => {
  it('BaseModal renders correctly', () => {
    const { container } = render(<BaseModal />);
    expect(container).toMatchSnapshot();
  });

  it('BigModal renders correctly', () => {
    const { container } = render(<BigModal />);
    expect(container).toMatchSnapshot();
  });

  it('SmallModal renders correctly', () => {
    const { container } = render(<SmallModal />);
    expect(container).toMatchSnapshot();
  });

  it('SmallModalCentered renders correctly', () => {
    const { container } = render(<SmallModalCentered />);
    expect(container).toMatchSnapshot();
  });

  it('LoadingIcon renders correctly', () => {
    const { container } = render(<LoadingIcon />);
    expect(container).toMatchSnapshot();
  });

  it('LoadingText renders correctly', () => {
    const { container } = render(<LoadingText />);
    expect(container).toMatchSnapshot();
  });

  it('ModalButtons renders correctly', () => {
    const { container } = render(<ModalButtons />);
    expect(container).toMatchSnapshot();
  });

  it('ModalCancellationButton renders correctly', () => {
    const { container } = render(<ModalCancellationButton />);
    expect(container).toMatchSnapshot();
  });

  it('ModalConfirmationButton renders correctly', () => {
    const { container } = render(<ModalConfirmationButton />);
    expect(container).toMatchSnapshot();
  });

  it('ModalContent renders correctly', () => {
    const { container } = render(<ModalContent />);
    expect(container).toMatchSnapshot();
  });

  it('ModalError renders correctly', () => {
    const { container } = render(<ModalError />);
    expect(container).toMatchSnapshot();
  });

  it('ModalInput renders correctly', () => {
    const { container } = render(<ModalInput />);
    expect(container).toMatchSnapshot();
  });

  it('ModalText renders correctly', () => {
    const { container } = render(<ModalText />);
    expect(container).toMatchSnapshot();
  });

  it('ModalTitle renders correctly', () => {
    const { container } = render(<ModalTitle />);
    expect(container).toMatchSnapshot();
  });

  it('RedIcon renders correctly', () => {
    const { container } = render(<RedIcon />);
    expect(container).toMatchSnapshot();
  });
});
