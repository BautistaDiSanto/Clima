import {
  Container,
  Center,
  Needle,
  North,
  South,
  East,
  Weast,
} from "./compascomponent";

export const Compass = (data) => {
  if (data) {
    return (
      <Container>
        <North>N</North>
        <South>S</South>
        <East>E</East>
        <Weast>O</Weast>
        <Center style={{ transform: `rotate(${data.data.wind.deg}deg)` }}>
          <Needle />
        </Center>
      </Container>
    );
  }
};
