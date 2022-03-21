import styled from 'styled-components';

export const div = styled.div`
  padding: ${({ theme }) => theme.size.long};

  >.kui_loading {
    margin-top: calc(50vh - 15px);
    transform: translateY(-50%);
  }
`
