import { useEffect, useState } from "react";
import styled from "styled-components";
import CircleImg from "../../Assets/circle.png";
import BlueCircleImg from "../../Assets/BlueCircle.png";
import SmallBlue from "../../Assets/SmallBlue.png";

const Background = () => {
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setFade(true);
    }, 300);
  }, []);

  return (
    <>
      <BlueBigImg
        style={{ position: "absolute", top: "-15vw", left: "-10vw", zIndex: 1 }}
        fade={fade}
        src={BlueCircleImg}
        rotateTrue={10}
        rotateFalse={-180}
      />
      <SmallCircle
        style={{ position: "absolute", top: "20vw", left: "-16vw", zIndex: 0 }}
        fade={fade}
        src={SmallBlue}
        rotateTrue={170}
        rotateFalse={-20}
      />
      <BlueBigImg
        style={{ position: "absolute", top: "4vw", right: "-35vw", zIndex: 1 }}
        fade={fade}
        src={BlueCircleImg}
        rotateTrue={130}
        rotateFalse={-50}
      />
      <SmallCircle
        style={{ position: "absolute", top: "35vw", right: "-6vw", zIndex: 0 }}
        fade={fade}
        src={SmallBlue}
        rotateTrue={95}
        rotateFalse={-150}
      />
    </>
  );
};

export default Background;

const BlueBigImg = styled.img<{ fade: boolean; rotateTrue: number; rotateFalse: number }>`
  width: 50vw;
  height: 50vw;
  rotate: ${(props) => (props.fade ? props.rotateTrue : props.rotateFalse)}deg;
  transition: 1s;
`;

const SmallCircle = styled.img<{ fade: boolean; rotateTrue: number; rotateFalse: number }>`
  width: 30vw;
  height: 30vw;
  rotate: ${(props) => (props.fade ? props.rotateTrue : props.rotateFalse)}deg;
  transition: 1s;
`;
