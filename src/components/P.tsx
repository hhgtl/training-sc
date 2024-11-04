import styled from 'styled-components';

type PPropsType = {
  width?: string;
  height?: string;
  $margin?: string;
  color?: string;
};

export const P = styled.p<PPropsType>`
  margin: ${(props) => props.$margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
`;
