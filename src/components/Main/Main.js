import {
  City,
  Container,
  ErrorContainer,
  Description,
  Location,
  General,
  Weather,
  Info,
  Column,
  Caca,
  Humidity,
  Row,
  Barometer,
  Thermometer,
  Wind,
  WindColumn,
  Windy,
  CompassIcon,
  Country,
} from "./MainComponent";
import { Compass } from "../compas/compas";
import ClipLoader from "react-spinners/ClipLoader";
import React from "react";

export const Main = ({ data, status, search }) => {
  if (search) {
    if (status === "loading")
      return (
        <Caca>
          <ErrorContainer>
            <ClipLoader color="white" size="150" />
          </ErrorContainer>
        </Caca>
      );
    if (data.cod === "404")
      return (
        <Caca>
          <ErrorContainer>
            <h2>{search} not found</h2>
          </ErrorContainer>
        </Caca>
      );
    return (
      <Caca>
        <Container>
          <Description>
            <Location>
              <City>{data.name}</City>
              <Country>,&nbsp;{data.sys.country}</Country>
            </Location>
            <General>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="not found"
              />
              <Weather>{data.weather[0].description}</Weather>
            </General>
          </Description>
          <Info>
            <Column>
              <Row>
                <Thermometer />
                <p>temp: {data.main.temp}°</p>
              </Row>
              <Row>
                <Thermometer />
                <p>máxima: {data.main.temp_max}°</p>
              </Row>
              <Row>
                <Thermometer />
                <p>mínima: {data.main.temp_min}°</p>
              </Row>
            </Column>
            <Column>
              <Row>
                <Thermometer />
                <p>sensación: {data.main.feels_like}°</p>
              </Row>
              <Row>
                <Barometer />
                <p>presión: {data.main.pressure} hPa</p>
              </Row>

              <Row>
                <Humidity />
                <p>humedad: {data.main.humidity}%</p>
              </Row>
            </Column>
          </Info>
          <Wind>
            <WindColumn>
              <h3
                style={{
                  marginLeft: "1.2rem",
                  marginTop: "-1.2rem",
                }}
              >
                Viento
              </h3>
              <Row>
                <CompassIcon />
                <p>&nbsp;dirección:</p>
              </Row>
              <Row>
                <Windy />
                <p>&nbsp;velocidad: {data.wind.speed}km</p>
              </Row>
            </WindColumn>
            <WindColumn style={{ alignItems: "center" }}>
              <Compass data={data} />
            </WindColumn>
          </Wind>
        </Container>
      </Caca>
    );
  } else {
    return <></>;
  }
};
