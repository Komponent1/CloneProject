import styled from 'styled-components';

export const div = styled.div`
  width: 400px;
  position: relative;

  font-size: 20px;
`;
export const input = styled.input`
  padding: 7px 10px;
  margin: 0;

  width: calc(100% - 24px);
  font-size: ${({ theme }) => theme.fontSize.basic};
  background: none;
  border: none;
  
  &:focus {
    outline: none;
  }
`;
export const ul = styled.ul<{ show: boolean }>`
  display: ${({ show }) => show ? 'block' : 'none'};
  
  position: absolute;
  top: auto;
  left: 1px;
  list-style-type: none;

  width: calc(100% - 2px);
  max-height: 100px;
  overflow-y: scroll;
  z-index: 10;
  margin: 0;

  border-radius: 4px;
  padding: 0px;
  background-color: ${({ theme }) => theme.color.basic};
  box-shadow: 0 0 5px solid black;
`;
export const li = styled.li`
  width: calc(100% - 20px);
  margin: 0;
  padding: 7px 10px;
`;
