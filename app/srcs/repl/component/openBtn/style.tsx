import styled from 'styled-components';

export const div = styled.div`
  position: fixed;
  top: 10px;
  left: 20px;
  width: 35px;
  height: 35px;
  
  z-index: 12;
`;
export const h1 = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: calc(100% - 2px);
  height: calv(100% - 2px);
  font-size: 30px;

  margin: 0;
  padding: 0;
  border-radius: 5px;

  border: ${({ active }) => active? '1px solid black' : '1px solid rgba(172, 172, 172, 0)'};
  &:hover {
    background: rgba(172, 172, 172, 0.5);
  }
`;
