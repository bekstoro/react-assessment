import styled from 'styled-components';

export const Task = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
`;

export const Heading = styled.h1`
  color: #216298;
`;

export const Button = styled.button`
  width: 300px;
  height: 70px;
  font-size: 1.1rem;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  
  &:hover {
    opacity: 0.5;
  }
`;

export const RedButton = styled(Button)`
  background-color: #ff5252;
`;

export const GreenButton = styled(Button)`
  background-color: #53ff53;
`;

export const BlueButton = styled(Button)`
  background-color: #5050ff;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > button:not(:first-child) {
    margin-top: 20px;
  }
`;
