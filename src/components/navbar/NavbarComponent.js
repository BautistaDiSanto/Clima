import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export const Container = styled.div`
  width: 100%;
  min-height: 3.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputThing = styled.div`
  width: 26rem;
  height: 1.5rem;
  border-radius: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Input = styled.input`
  width: 23rem;
  height: 100%;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  height: 1.5rem;
  width: 1.5rem;
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.1);
    transition: 0.2s;
    cursor: pointer;
  }
  :active {
    transform: scale(1.5);
  }
`;

export const IconThing = styled(BiSearch)`
  height: 1.2rem;
  width: 1.2rem;
  color: black;
`;
