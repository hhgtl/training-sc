import styled from 'styled-components';

type H1PropsType = {
  color?: string;
};

export const H1 = styled.h1<H1PropsType>`
  margin-top: 20px;
  margin-left: 20px;
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 700;
`;
