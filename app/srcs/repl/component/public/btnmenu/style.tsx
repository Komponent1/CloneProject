import styled from 'styled-components';

export const div = styled.div`
  display: inline-block;
  position: relative;
`;
export const btn = styled.div<{ show: boolean }>`
  display: inline-block;
  border-radius: 10px;
  border: 1px solid ${({ show }) => show ? '#235E52' : 'rgba(0,0,0,0)'};
  padding: 3px;
  

  &:hover {
    background-color: rgba(172, 172, 172, 0.4);
  }
`;
export const ul = styled.div<{ show: boolean }>`
  display: ${({ show }) => show ? 'block' : 'none'};

  position: absolute;
  top: auto;
  right: 0;

  width: 100px;
  border: 1px solid rgba(172, 172, 172, 0.5);
`;
export const li = styled.div`
  width: 100%;

  &:bover{
    background: rgba(172, 172, 172, 0.5);
  }
`;
