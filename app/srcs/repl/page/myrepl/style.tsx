import styled from 'styled-components';

export const div = styled.div`
  padding: ${({ theme }) => theme.size.long};
  height: 100%;

  background: ${({ theme }) => theme.color.white};
  
  >.kui_loading {
    margin-top: 100vh;
    transform:translateY(-50%);
  }
`;

export const wrapper = styled.div`
  padding: ${({ theme }) => theme.size.xxs};
  font-size: ${({ theme }) => theme.size.lg};
  font-weight: 500;
`
export const li = styled(wrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.color.border};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.size.base};
  font-weight: 400;

  &:hover {
    background: ${({ theme }) => theme.color.white};
  }
`;
export const name = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: inline-flex;
  align-items: center;
  
  >.kui_rating {
    margin-right: ${({ theme }) => theme.size.xxxs};
  }
  >.kui_rating>.kui_rating_rate {
    font-size: ${({ theme }) => theme.size.base};
  }
`;
export const lang = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;
export const date = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

