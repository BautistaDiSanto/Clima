import { Container } from "./BodyComponent";
import { Main } from "../Main/Main";
import { NavBar } from "../navbar/Navbar";
import { useQuery } from "react-query";
import React from "react";

export const Body = () => {
  const key = process.env.REACT_APP_API_KEY;
  const [search, setSearch] = React.useState("");
  const { status, data } = useQuery(search, async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric&lang=es`
    );
    return res.json();
  });
  console.log("body");
  console.log(data);
  return (
    <Container>
      <NavBar setSearch={setSearch} />
      <Main data={data} status={status} search={search} />
    </Container>
  );
};
