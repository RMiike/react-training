import React, { useState, InputHTMLAttributes, ReactElement } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import styled from "styled-components";

interface iListItem extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactElement<any, any>;
  name: string;
  hasDropDown: boolean;
}
const ListItem: React.FC<iListItem> = ({
  hasDropDown,
  name,
  icon: Icon,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleSetDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <MainContainer {...rest}>
        <IconContainer>{Icon && Icon}</IconContainer>
        <div>
          <span>{name}</span>
        </div>
        <DropDown onClick={handleSetDropDown}>
          {/* Add property when is expanded, have to put more color in the icon */}
          {hasDropDown && (isOpen ? <ExpandMore /> : <ExpandLess />)}
        </DropDown>
      </MainContainer>
    </Container>
  );
};

export default ListItem;

const Container = styled.li`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding-top: 0px;
  padding-bottom: 0px;
  height: 55px;
`;
const MainContainer = styled.div`
  align-items: center;
  opacity: 1;
  margin: 0.15rem 1.6rem;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  display: flex;
  height: 52px;
  color: rgb(255, 255, 255);
  transition: all ease-in 0.2s;

  border-radius: 15px;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: rgb(255, 255, 255);
  }
  span {
    margin: 0px;
    font-family: "Montserrat", "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 300;
    font-size: 1.45rem;
    line-height: 0;
    letter-spacing: 0.00938em;
    display: block;
    width: 110px;
  }
`;
const IconContainer = styled.div`
  position: relative;
  display: flex;
  width: 3.6rem;
  height: 3.6rem;
  font-size: 0.875rem;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  svg {
    width: 3.6rem;
    height: 2.6rem;
  }
`;
const DropDown = styled.div`
  position: relative;
  display: flex;
  width: 3.6rem;
  height: 3.6rem;
  align-items: center;
  svg {
    width: 3.6rem;
    height: 2.6rem;
    opacity: 0.53;
    margin-left: 10px;
  }
`;
