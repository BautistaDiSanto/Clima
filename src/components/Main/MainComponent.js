import styled from "styled-components";
import {
  WiHumidity,
  WiBarometer,
  WiStrongWind,
  WiThermometer,
} from "react-icons/wi";
import { GiCompass } from "react-icons/gi";

export const Caca = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 0.5rem;
`;

export const ErrorContainer = styled.div`
  width: 30rem;
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
  height: 25%;
  width: 100%;
`;

export const Location = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
`;

export const City = styled.p`
  font-size: 1.7rem;
  font-weight: bolder;
  margin: 1rem;
`;

export const General = styled.div`
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
  margin-bottom: 0.5rem;
`;

export const Info = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled.div`
  height: 100%;
  width: 50%;
  margin: 2rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border-bottom: 1px solid gray;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Humidity = styled(WiHumidity)`
  min-height: 1.5rem;
  min-width: 1.5rem;
`;

export const Barometer = styled(WiBarometer)`
  min-height: 1.5rem;
  min-width: 1.5rem;
`;

export const Windy = styled(WiStrongWind)`
  min-height: 1.5rem;
  min-width: 1.5rem;
`;

export const Thermometer = styled(WiThermometer)`
  min-height: 1.5rem;
  min-width: 1.5rem;
`;

export const Wind = styled.div`
  height: 45%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CompassIcon = styled(GiCompass)`
  min-height: 1.5rem;
  min-width: 1.5rem;
`;
