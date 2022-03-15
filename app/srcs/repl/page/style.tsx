import styled from 'styled-components';

export const home = styled.div`
  >.kui_loading {
    margin-top: calc(50vh - 15px);
    transform: translateY(-50%);
  }
`
export const div = styled.div`
  width: 80%;
  margin-left: 15px;
`;
export const button = styled.div`
  display: inline-block;

  border: 1px solid rgba(172, 172, 172, 0.8);
  background: rgba(172, 172, 172, 0.4);
  border-radius: 1px;
  padding: 0 4px;
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
