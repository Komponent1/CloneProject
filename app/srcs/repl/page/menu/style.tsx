import styled from 'styled-components';

export const div = styled.div`
  overflow-y: scroll;

  padding-top: ${({ theme }) => theme.size.longlong};
  width: 240px;

  z-index: 11;
  border-right: 1px solid #E4E5E6;
  background: white;
`;
