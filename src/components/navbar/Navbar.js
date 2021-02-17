import { Container, Input } from "./NavbarComponent";
import React from "react";

export const NavBar = ({ setSearch }) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Search your city"
        onKeyPress={async (Event) => {
          if (Event.key === "Enter") {
            setSearch(Event.target.value);
          }
        }}
      />
    </Container>
  );
};
