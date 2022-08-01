import React from "react";
import {
  SupervisedUserCircleOutlined,
  QuestionAnswer,
  Dashboard,
  Image,
  Apps,
  ShoppingBasket,
  ContentPaste,
  Upcoming,
  ReceiptLong,
} from "@mui/icons-material";
import ListItem from "../ListItem";

import { Container, NavBar, TitleListItem } from "./styles";
import NavTitle from "../NavTitle";

const List: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <NavTitle
          icon={<QuestionAnswer />}
          path="/"
          title="To Be Defined here"
        />
        <ul>
          <hr />

          <ListItem
            icon={<SupervisedUserCircleOutlined />}
            name="Renato Alves"
            hasDropDown={true}
          />
          <hr />
          <ListItem icon={<Dashboard />} name="Dashboard" hasDropDown={true} />
          <TitleListItem>Pages</TitleListItem>
          <ListItem icon={<Image />} name="Pages" hasDropDown={true} />
          <ListItem icon={<Apps />} name="Applications" hasDropDown={true} />
          <ListItem
            icon={<ShoppingBasket />}
            name="Eccomerce"
            hasDropDown={true}
          />
          <ListItem
            icon={<ContentPaste />}
            name="Authentication"
            hasDropDown={true}
          />
          <hr />
          <TitleListItem>Docs</TitleListItem>

          <ListItem icon={<Upcoming />} name="Basic" hasDropDown={true} />
          <ListItem
            icon={<ReceiptLong />}
            name="Change log"
            hasDropDown={false}
          />
        </ul>
      </NavBar>
    </Container>
  );
};

export default List;
