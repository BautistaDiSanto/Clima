import styled from "styled-components";

export const Container = styled.div`
  width: 9.2rem;
  height: 9.2rem;
  border: 2.5px solid white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scaleY(-1);
`;

export const North = styled.p`
  position: absolute;
  bottom: 0;
`;

export const South = styled.p`
  position: absolute;
  top: 0;
`;

export const East = styled.p`
  position: absolute;
  right: 0;
`;

export const Weast = styled.p`
  position: absolute;
  left: 0;
`;

export const Center = styled.div`
  width: 0.25rem;
  height: 0.25rem;
  background-color: white;
  border-radius: 100%;
  overflow: visible;
  align-items: center;
`;

export const Needle = styled.div`
  width: 4rem;
  height: 0.25rem;
  background-color: white;
  border-radius: 1rem;
`;
