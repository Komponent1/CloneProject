import styled from 'styled-components';

export const border = styled.div`
  border: 1px solid rgba(172, 172, 172, 0.5);
  border-radius: 2px;
`; 

export const div = styled.div`
  background-color: white;
  box-shadow: 1px 1px 20px grey;
  border-radius: 5px;
  
  justify-content: center;

  width: 500px;
  margin: auto;
  margin-top: 150px;
  padding: 60px 50px;

`;
export const head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const title = styled.div`
  font-size: 20px;
  font-weight: 900;
`;
export const body = styled.div`
  display: flex;
  flex-direction: row;
`;
export const left = styled.div`

`;
export const right = styled.div`

`;
export const input = styled.input`
  display: block;
  border: 1px solid rgba(172, 172, 172, 0.5);
  border-radius: 2px;

  width: 80%;
  font-size: 20px;
  margin-bottom: 25px;
  padding: 10px;
  color: rgba(10, 10, 10, 0.9);
`;
export const button = styled(border)`
  font-size: 15px;
  display: inline-block;
  padding: 5px 5px;
  margin-right: 30px;

  border-radius: 4px;
`;
