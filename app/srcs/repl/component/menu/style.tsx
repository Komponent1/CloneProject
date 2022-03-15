import styled from 'styled-components'

export const div = styled.div`
  overflow-y: scroll;

  padding-top: 70px;
  width: 240px;

  z-index: 11;
  border-right: 1px solid #E4E5E6;
  background: white;

`;
export const menu = styled.div`
  width: calc(100% - 32px);
  margin: 0.5em;
  padding: 8px;
  border-radius: 0.5em;

  &:hover {
    background: rgba(172, 172, 172, 0.5);
  }
`;