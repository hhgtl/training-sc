import styled from 'styled-components';

type ButtonPropsType = {
  width?: string;
  height?: string;
  display?: string;
  borderRadius?: string;
  $boxShadow?: string;
  background?: string;
  $margin?: string;
  color?: string;
};

export const Button = styled.button<ButtonPropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.$boxShadow};
  background: ${(props) => props.background};
  margin: ${(props) => props.$margin};
  border: 2px solid ${(props) => props.color};
  border-radius: 5px;
  background-color: transparent;
  color: ${(props) => props.color};
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  &:hover {
    background: rgb(78, 113, 254);
    color: white;
  }
`;
