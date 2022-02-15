import styled from 'styled-components'

export const div = styled.div`
  overflow-y: scroll;

  padding-top: 70px;
  width: 240px;
  height: 100vh;

  z-index: 11;
  border-right: 1px solid rgba(172, 172, 172, 0.5);


`;
export const menu = styled.div`
  width: calc(100% - 32px);
  margin: 3px 8px;
  padding: 8px;
  border-radius: 5px;

  &:hover {
    background: rgba(172, 172, 172, 0.5);
  }
`;