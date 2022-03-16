import styled from 'styled-components';

export const main = styled.div`
  background: ${({ theme }) => theme.color.basic};

  margin-top: 50px;
  padding: 20px;
  flex-grow: 1;
`;
export const div = styled.div`
  display: flex;
  min-height: 100vh;
`