import styled from 'styled-components';

export const div = styled.div`
  display: inline-block;
  position: relative;
`;
export const btn = styled.div<{ show: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  text-align: center;
  line-height: 20px;
  border: 1px solid ${({ show }) => show ? '#235E52' : 'rgba(0,0,0,0)'};
  
  &:hover {
    background-color: rgba(172, 172, 172, 0.4);
  }
`;
export const ul = styled.div<{ show: boolean }>`
  display: ${({ show }) => show ? 'block' : 'none'};

  position: absolute;
  top: auto;
  right: 0;
  background-color: white;
  box-shadow: 0px 0px 5px grey;
  white-space: nowrap;
`;
export const li = styled.div`
  padding: 5px 15px;

  &:bover{
    background: rgba(172, 172, 172, 0.5);
  }
`;
