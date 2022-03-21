import styled from 'styled-components';

export const div = styled.div`
  background-color: ${({ theme }) => theme.color.border};
  border-radius: 8px;

  padding: 0 ${({ theme }) => theme.size.xxs};
  display: inline-flex;
  flex-direction: row;
  item-align: center;
`;
