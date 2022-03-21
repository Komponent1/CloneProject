import styled from 'styled-components';

export const div = styled.div`
  display: flex;
  flex-direction: row;
`;
export const rate = styled.div<{ hover: boolean, rate: boolean }>`
  position: relative;
  color: rgba(172, 172, 172, 0.8);
  font-size: 30px;

  &:after {
    position: absolute;
    top: 0;
    left: 0;

    content: '\\2605';
    color: orange;
    opacity: ${({ rate }) => rate ? 1 : 0};
  }

  transform: scale(${({ hover }) => hover ? 1.2 : 1});
  transform-origin: 50% 70%;
  transition transform 0.5s;
`;
