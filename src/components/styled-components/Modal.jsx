import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// modals
export const BaseModal = styled.div`
  position: absolute;
  background-color: #fff;
  border: 2px solid #ea2929;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 100;
`;

export const BigModal = styled(BaseModal)`
  width: 600px;
  height: 300px;
  top: calc(50% - 150px);
  left: calc(50% - 330px);
`;

export const SmallModal = styled(BaseModal)`
  width: 600px;
  height: 130px;
  top: calc(50% - 65px);
  left: calc(50% - 330px);
`;

export const SmallModalCentered = styled(SmallModal)`
  justify-content: center;
  align-items: center;
`;

// other components
export const LoadingIcon = styled.div`
  display: flex;
  border: 10px solid #174d73; /* Light grey */
  border-top: 10px solid transparent; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  animation-name: spin;
  animation-duration: 2s;
  transition-timing-function: linear;
  animation-iteration-count: infinite;
  animation: ${spin} 2s linear infinite;
`;

export const LoadingText = styled.h3`
  font-weight: 500;
  color: #3498db;
  margin-bottom: 0;
`;

export const ModalButtons = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ModalCancellationButton = styled.button`
  width: 100px;
  padding: 10px 0;
  background-color: #fff;
  border: 1px solid #03629a;
  border-radius: 4px;
  color: #03629a;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const ModalConfirmationButton = styled.button`
  width: 100px;
  padding: 10px 0;
  background-color: #d7eef7;
  border: 1px solid #d7eef7;
  border-radius: 4px;
  color: #03629a;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    opacity: 0.5;
  }
`;

export const ModalContent = styled.section`
  width: 100%;
  
  & {
    width: 100%;
    text-align: left;
  }
  
  & textarea {
    width: 100%;
    height: 80px;
    resize: none;
    color: #03629a;
  }
`;

export const ModalError = styled.h5`
  color: #ea2929;
  margin: 0;
`;

export const ModalInput = styled.input`
  width: 200px;
`;

export const ModalText = styled.h4`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
`;

export const ModalTitle = styled.h3`
  width: 100%;
  display: flex;
  font-size: 1.2rem;
  margin-top: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid #c1c1c1;
`;

export const RedIcon = styled.i`
  color: #ea2929;
  margin-right: 10px;
`;
