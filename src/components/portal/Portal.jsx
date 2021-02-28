import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const element = document.createElement('div');
const modalRoot = document.getElementById('modal');

export default function Portal(props) {
  const ref = useRef(null);

  const closeModal = (e) => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      props.closeModal();
    }
  };

  useEffect(() => {
    modalRoot.appendChild(element);
    document.addEventListener('click', closeModal);
    document.addEventListener('keyup', (e) => e.key === 'Escape' && closeModal(e));
    return () => {
      modalRoot.removeChild(element);
      document.removeEventListener('click', closeModal);
      document.removeEventListener('keyup', (e) => e.key === 'Escape' && closeModal(e));
    };
  }, []);

  return createPortal(<section ref={ref}>{props.children}</section>, element);
}

Portal.propTypes = {
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired
};
