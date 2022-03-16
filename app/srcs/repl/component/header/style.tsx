import styled from 'styled-components';

export const div = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  width: 100%;
  padding: 15px;

  border-bottom: 1px solid ${({ theme }) => theme.color.basic};
  background: white;

  
  text-align: center;
`;