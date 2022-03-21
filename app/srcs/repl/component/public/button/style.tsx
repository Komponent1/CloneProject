import styled from 'styled-components';

export const button = styled.div`
  display: inline-block;
  position: relative;

  padding: 4px 15px;
  color: black;
  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s, border 0.3s;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background-color: rgba(1,1,1, 0.1);
  }
`;
export const wave = styled.div<{ opacity: number, top: number, left: number, scale: number, duration: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  opacity: ${({ opacity }) => opacity};
  width: 200px;
  height: 200px;
  border-radius: 50%;

  background-color: rgba(1,1,1,0.3);
  transform: scale(${({ scale }) => `${scale}, ${scale}`});
  transform-origin: center;
  transition: transform ${({ duration }) => `${duration}s`}, opacity ${({ duration }) => `${duration}s`};
`;
