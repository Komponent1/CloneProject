import styled from 'styled-components';

export const div = styled.div`
  width: 500px;
  height: 20px;
  margin:auto;
`;
export const input = styled.input`
  width: calc(100% - 6px);
  padding: 3px;

`;
export const autoul = styled.div<{display: boolean}>`
  display: ${({ display }) => display? 'block' : 'none'};
  width: 100%;
  max-height: 100px;
  overflow-y: scroll;
  overflow-x: hidden;

  border: 1px solid black;
`;
export const autoli = styled.div`
  width: 100%;
  padding: 10px;
`;
