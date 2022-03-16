import styled from 'styled-components';

export const div = styled.div`
  background-color: ${({ theme }) => theme.color.basic};
  border-radius: 8px;

  padding: 0 10px;
  display: inline-flex;
  flex-direction: row;
  item-align: center;
`;
