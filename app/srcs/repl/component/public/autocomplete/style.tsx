import styled from 'styled-components';

export const div = styled.div`
  width: 500px;
`;
export const input = styled.input`
  width: calc(100% - 6px);
  padding: 3px;
`;
export const ul = styled.div<{ display: boolean }>`
  display: ${({ display }) => display ? 'block' : 'none'};
  
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  border: 1px solid black;
`;
export const li = styled.div`
  width: calc(100% - 20px);
  padding: 10px;
`;
