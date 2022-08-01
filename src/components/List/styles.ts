import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 0;
  display: block;
`;
export const NavBar = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  height: calc(100vh - 3rem);
  width: 250px;
  background: linear-gradient(var(--gradient-dark-1), var(--gradient-dark-2));
  z-index: 1200;
  margin: 16px;

  white-space: nowrap;
  overflow-y: auto;
  font-family: "Montserrat", "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 20px;
  font-weight: 400;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 27px 0px;
`;
export const TitleListItem = styled.span`
  margin: 16px 0px 8px 8px;
  font-family: "Montserrat", "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.03333em;
  display: block;
  padding-left: 24px;
  opacity: 1;
  text-transform: uppercase;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(255, 255, 255);
`;
