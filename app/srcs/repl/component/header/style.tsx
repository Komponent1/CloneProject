import styled from 'styled-components';

export const div = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  width: 100%;
  padding: ${({ theme }) => theme.size.base};

  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: white;

  
  text-align: center;
`;