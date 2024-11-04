import styled from 'styled-components';

type ContainerPropsType = {
  width?: string;
  height?: string;
  display?: string;
  $borderradius?: string;
  $boxshadow?: string;
  $background?: string;
  $margin?: string;
};

export const Container = styled.div<ContainerPropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.$borderradius};
  box-shadow: ${(props) => props.$boxshadow};
  background: ${(props) => props.$background};
  margin: ${(props) => props.$margin};
  button + button {
    margin-left: 12px;
  }
`;
