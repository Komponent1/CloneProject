import styled from 'styled-components';

export const div = styled.div`
  position: relative;
`;
export const input = styled.input`
  display: block;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
  margin: 0;
  border: none;

  background: #E4E5E6;
`;
export const menu = styled.div<{ show: boolean }>`
  display: ${({ show }) => show ? 'block' : 'none'};
  position: absolute;
  top: 2.6rem;

  width: 100%;
  max-height: 200px;
  overflow-y: scroll;
  background: #E4E5E6;
  
  box-shadow: 0 0 5px grey;
  border-radius: 0.4rem;

  z-index: 11;
`;
export const item = styled.div`
  width: calc(100% - 20px);
  padding: 4px 10px;

  &:hover {
    background: rgba(172, 172, 172, 0.2);
  }
`;
