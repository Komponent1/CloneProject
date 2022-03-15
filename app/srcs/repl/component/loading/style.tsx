import styled, { keyframes, css } from 'styled-components';

export const div = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 100%;
`;
export const circle = styled.div`
  display: inline-block;

  width: 60px;
  height: 60px;
  border-radius: 50%;

  border-top: 10px solid rgb(90, 90, 90);
  border-right: 10px solid rgb(172, 172, 172);
  border-bottom: 10px solid rgb(172, 172, 172);
  border-left: 10px solid rgb(172, 172, 172);
`;
const spin = keyframes`
  from {
    transform: rotate(45deg);
  } to {
    transform: rotate(405deg);
  }
`

export const linearspin = styled(circle)`
  animation: ${spin} 1s infinite linear;
`
export const delayspin = styled(circle)`
  position: relative;
  border: 10px solid rgb(90, 90, 90); 

  &:after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    border-top: 10px solid rgb(172, 172, 172);
    border-left: 10px solid rgb(172, 172, 172, 0);
    border-right: 10px solid rgb(172, 172, 172);
    border-bottom: 10px solid rgb(172, 172, 172, 0);

    animation: ${spin} 1.5s infinite ease;
  }

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    border-top: 10px solid rgb(172, 172, 172, 0);
    border-left: 10px solid rgb(172, 172, 172);
    border-right: 10px solid rgb(172, 172, 172, 0);
    border-bottom: 10px solid rgb(172, 172, 172);

    animation: ${spin} 1.5s infinite ease 0.2s;
  }
`

const scale = keyframes`
  0% {
    transform: scaleY(1);
  } 30% {
    transform: scaleY(1.7);
  } 60% {
    transform: scaleY(1);
  } 100% {
    transform: scaleY(1);
  }
`;
export const lines = styled.div`
  display: inline-flex;
`
export const line = styled.div<{ delay: number }>`
  width: 10px;
  height: 40px;
  margin: 0 3px;

  background: rgb(90, 90, 90);

  transform-origin: center;
  animation: ${({ delay }) => css`${scale} 1.2s infinite ease ${delay}s`};

`