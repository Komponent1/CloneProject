import styled from 'styled-components';

export const border = styled.div`
  border: 1px solid rgba(172, 172, 172, 0.5);
  border-radius: 2px;
`; 

export const div = styled.div`
  background-color: white;
  border-radius: 5px;
  
  justify-content: center;

  width: 500px;
  
  padding: 60px 50px;
  
  >.kui_button {
    font-weight: 500;
  }
  >.kui_button:nth-child(4) {
    margin-left: 10px;
    background: ${({ theme }) => theme.color.sky}; 
  }
`;
export const input = styled.input`
  display: block;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 2px;

  width: 80%;
  font-size: ${({ theme }) => theme.size.base};
  margin-bottom: 25px;
  padding: 10px;
  color: rgba(10, 10, 10, 0.9);
`;
