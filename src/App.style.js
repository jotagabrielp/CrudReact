import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  button {
    width: 50%;
    margin: auto;
  }
  h5,
  span {
    text-align: center;
  }
`;

export const Form = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  div {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
  button {
    width: 25%;
  }
`;
