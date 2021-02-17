import { Container } from "./BodyComponent";
import { Main } from "../Main/Main";
import { NavBar } from "../navbar/Navbar";
import { useQuery } from "react-query";
import React from "react";

export const Body = () => {
  const [search, setSearch] = React.useState("");
  const { status, data } = useQuery(search, async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=087fffdd5a3e9f23508f70eb72e360c4&units=metric&lang=es`
    );
    return res.json();
  });
  return (
    <Container>
      <NavBar setSearch={setSearch} />
      <Main data={data} status={status} search={search} />
    </Container>
  );
};
/*const Content = () => {
  console.log(data);
  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error :(</p>;
  return (
    <InfoDisplay>
      <p>{data.name || "boca la concha de tu hermana"}</p>
    </InfoDisplay>
  );
};
const [data, setData] = React.useState({});
React.useEffect(() => {
  console.log(search);
  const pp = async () => {
    if (search) {
      setData(await searchAPI(search));
    }
  };
  pp();
  console.log(data);
}, [search]);*/
