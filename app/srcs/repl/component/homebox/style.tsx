import styled from 'styled-components';

export const div = styled.div`
  margin: ${({ theme }) => theme.size.long} 0;
`;
export const title = styled.div`
  color: black;
  font-weight: 900;
  font-size: ${({ theme }) => theme.size.xxl};
  margin-bottom: ${({ theme }) => theme.size.xs};
`;
export const wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const box = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 5px;
  padding: 10px;
`;
export const langbox = styled(box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

`
export const rebox = styled(box)`
  position: relative;
  margin-right: ${({ theme }) => theme.size.xxs};
`;
export const linker = styled.div`
  color: ${({ theme }) => theme.color.sky};
  font-weight: 900;
  font-size: 15px;
`
export const lang = styled.div`
  display: inline-block;
  position: relative;
  left: 0;
  bottom: 0;
  font-size: 10px;
`
export const date = styled.div`
  display: inline-block;
  position: relative;
  right: 0;
  bottom: 0;
  font-size: 10px;
  margin-left: 20px;
`
export const addon = styled.div`
  color: ${({ theme }) => theme.color.sky};
  margin-top: ${({ theme }) => theme.size.xxxs};
`;