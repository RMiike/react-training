import styled from "styled-components";

export const Container = styled.div`
  box-shadow: none;
  color: rgb(57, 71, 103);
  color: rgba(0, 0, 0, 0.87);
  display: block;
  font-family: "Montserrat", "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 20px;
  font-weight: 400;
  opacity: 1;
  padding: 24px 32px 8px;
  text-align: center;
  white-space: nowrap;
  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    align-items: center;
    opacity: 1;
    svg {
      color: rgba(255, 255, 255, 0.89);
      font-size: 34px;
      background-color: transparent;
    }
    div {
      width: 0;
      margin-left: 4px;
      h6 {
        color: rgba(255, 255, 255, 0.89);
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
`;
