import styled from "styled-components";
export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  display: flex;
  padding: 16px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 50%;
  background-color: #fff;
  button {
    width: 50%;
  }
`;
