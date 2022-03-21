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

export const li = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const star = styled.div<{ color: string}>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 1px solid black;

  background: ${({ color }) => color};
  display:inline-block;
  margin-right: 15px;
`;
export const name = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;
export const lang = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;
export const date = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

