import styled from 'styled-components';

export const div = styled.div`
  background-color: ${({ theme }) => theme.color.border};
  border-radius: 8px;

  padding: 0 ${({ theme }) => theme.size.xxs};
  display: inline-flex;
  flex-direction: row;
  item-align: center;

  & input {
    background: none;
    border: none;

    &:focus {
      outline: none;
    }
  }

  & ul {
    background: ${({ theme }) => theme.color.border};
    width: calc(100% + 18px);
    transform: translateX(-10px);
    box-shadow: 0 2px 2px grey;
    border-radius: 0 0 5px 5px;

    top: 29px;
    text-align: left;
  }
`;
