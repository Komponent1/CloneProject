import styled from 'styled-components';

export const div = styled.div`
  background-color: white;
  border-radius: 5px;
  
  justify-content: center;

  width: 500px;
  padding: 60px 50px;

  position: relative;
  >.kui_button {
    position: absolute;
    top: 60px;
    right: 50px;
  }
`;
export const title = styled.div`
  font-size: ${({ theme }) => theme.size.xl};
  font-weight: 900;
`;
export const body = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.size.base};

  margin-top: ${({ theme }) => theme.size.base};
  
  >.kui_filterdropdown > input {
    width: calc(100% - ${({ theme }) => theme.size.base});
  }
`;

export const input = styled.input`
  display: block;

  background: ${({ theme }) => theme.color.border};
  font-size: ${({ theme }) => theme.size.base};
  padding: 6px;
  border: none;
  border-radius: 8px;
`;
export const infobox = styled.div`
  box-shadow: 0 0 0 1px ${({ theme }) => theme.color.grey} inset;
  border-radius: ${({ theme }) => theme.size.xxxs};
  
  width: calc(100% - ${({ theme }) => theme.size.xs} * 2);
  height: 50px;
  padding: ${({ theme }) => theme.size.xs };

  font-size: ${({ theme }) => theme.size.xxl };
  font-weight: 900;
`;
