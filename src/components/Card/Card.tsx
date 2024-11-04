import React from 'react';
import { Container } from '../Container';
import { Img } from '../Img';
import desertImg from '../../img/desert.png';
import { H1 } from '../H1';
import { P } from '../P';
import { Button } from '../Button';
import { useTheme } from 'styled-components';

const Card = () => {
  const { container, button, p, h1 } = useTheme();
  return (
    <Container
      width="300px"
      height="350px"
      $borderradius="15px"
      $boxshadow={container.boxshadowColor.black}
      $background={container.backgroundColor.white}
      $margin="0 auto"
    >
      <Img src={desertImg} />
      <H1 color={h1.color.black}>Headline</H1>
      <P height="40px" width="260px" $margin="20px 20px 0" color={p.color.grey}>
        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
      </P>
      <Container width="300px" height="30px" $margin="20px 0 0 0 ">
        <Button width="86px" height="30px" $margin="0 0 0 20px" color={button.color.blue}>
          See more
        </Button>
        <Button width="86px" height="30px" color={button.color.blue}>
          Save
        </Button>
      </Container>
    </Container>
  );
};

export default Card;

// return (
//   <Container
//     width="300px"
//     height="350px"
//     borderradius="15px"
//     boxshadow="0px 4px 20px 5px rgba(0, 0, 0, 0.1)"
//     background="rgb(255, 255, 255)"
//     margin="0 auto"
//   >
//     <Img src={desertImg} />
//     <H1>Headline</H1>
//     <P height="40px" width="260px" margin="20px 20px 0">
//       Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
//     </P>
//     <Container width="300px" height="30px" margin="20px 0 0 0 ">
//       <Button width="86px" height="30px" margin="0 0 0 20px">
//         See more
//       </Button>
//       <Button width="86px" height="30px">
//         Save
//       </Button>
//     </Container>
//   </Container>
// );
