import styled from 'styled-components';

export const background = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(172,172,172,0.5);

  z-index: 99;
  text-align: center;
`;
export const div = styled.div`
  display: inline-block;
  margin-top: 50vh;
  transform: translateY(-50%);
  text-align: left;

  position: relative;
  box-shadow: 1px 1px 20px grey;
`;
export const close = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
  background: ${({ theme }) => theme.color.white};

  border-radius: 20px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;

  box-shadow: 1px 1px 20px grey;

  font-weight: 800;
  color: ${({ theme }) => theme.color.grey};
`;
