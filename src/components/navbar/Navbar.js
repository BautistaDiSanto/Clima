import {
  Container,
  Input,
  Button,
  IconThing,
  InputThing,
} from "./NavbarComponent";

import React from "react";

export const NavBar = ({ setSearch }) => {
  const [value, setValue] = React.useState("");
  return (
    <Container>
      <InputThing>
        <Input
          type="text"
          placeholder="Search your city"
          onKeyPress={(Event) => {
            if (Event.key === "Enter") {
              setSearch(Event.target.value);
            }
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            setSearch(value);
          }}
        >
          <IconThing />
        </Button>
      </InputThing>
    </Container>
  );
};
