import styled from 'styled-components';

export const main = styled.section`
  background: ${({ theme }) => theme.color.background};

  margin-top: ${({ theme }) => theme.size.longlong};
  flex-grow: 1;
`;
export const div = styled.div`
  display: flex;
  min-height: 100vh;
`