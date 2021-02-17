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
  Windy,
  CompassIcon,
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
    console.log(data);
    return (
      <Caca>
        <Container>
          <Description>
            <Location>
              <City>{data.name},</City>
              <p>{data.sys.country}</p>
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
            <Column>
              <h3 style={{ marginTop: "-3rem" }}>viento</h3>
              <Row style={{ marginTop: "-3rem" }}>
                <CompassIcon />
                <p> dirección:</p>
              </Row>
              <Row style={{ marginTop: "-3rem" }}>
                <Windy />
                <p> velocidad: {data.wind.speed}km</p>
              </Row>
            </Column>
            <Column>
              <Compass data={data} />
            </Column>
          </Wind>
        </Container>
      </Caca>
    );
  } else {
    return <></>;
  }
};
