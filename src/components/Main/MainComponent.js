import styled from "styled-components";
import {
  WiHumidity,
  WiBarometer,
  WiStrongWind,
  WiThermometer,
} from "react-icons/wi";
import { AiOutlineCompass } from "react-icons/ai";

import { keyframes } from "styled-components";

const rotateperrito = keyframes`
 0% {transform: rotate(20deg);
  transform: scale(1.1);
}
 33% { transform: rotate(-40deg);}
 66% { transform: rotate(30deg);}
 100% { transform: rotate(0deg);}
`;

export const Caca = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 28rem;
  height: 30rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 0.5rem;
`;

export const ErrorContainer = styled.div`
  width: 28rem;
  height: 30rem;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 0.5rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 25%;
  width: 100%;
`;

export const Location = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
`;

export const City = styled.p`
  font-size: 1.7rem;
  font-weight: bolder;
  margin-top: 0.4rem;
`;

export const Country = styled.p`
  margin-top: 0.9rem;
`;

export const General = styled.div`
  height: 50%;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

export const Weather = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Info = styled.div`
  height: 38%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  margin: 1.5rem;
  justify-content: space-around;
  flex-direction: column;
  border-bottom: 1px solid gray;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const Humidity = styled(WiHumidity)`
  min-height: 1.5rem;
  min-width: 1.5rem;
  :hover {
    transition: 1s;
    animation-duration: 1s;
    animation-name: ${rotateperrito};
  }
`;

export const Barometer = styled(WiBarometer)`
  min-height: 1.5rem;
  min-width: 1.5rem;
  :hover {
    transition: 1s;
    animation-duration: 1s;
    animation-name: ${rotateperrito};
  }
`;

export const Windy = styled(WiStrongWind)`
  min-height: 1.5rem;
  min-width: 1.5rem;
  :hover {
    transition: 1s;
    animation-duration: 1s;
    animation-name: ${rotateperrito};
  }
`;

export const Thermometer = styled(WiThermometer)`
  min-height: 1.5rem;
  min-width: 1.5rem;
  :hover {
    transition: 1s;
    animation-duration: 1s;
    animation-name: ${rotateperrito};
  }
`;

export const Wind = styled.div`
  height: 37%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WindColumn = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  margin: 1.5rem;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const CompassIcon = styled(AiOutlineCompass)`
  min-height: 1.5rem;
  min-width: 1.5rem;
  :hover {
    transition: 1s;
    animation-duration: 1s;
    animation-name: ${rotateperrito};
  }
`;
