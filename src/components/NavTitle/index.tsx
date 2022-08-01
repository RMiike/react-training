import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

interface iNavtitle {
  path: string;
  title: string;
  icon: ReactElement<any, any>;
}
const NavTitle: React.FC<iNavtitle> = ({
  path,
  title,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Link to={path}>
        {Icon}
        <div>
          <h6>{title}</h6>
        </div>
      </Link>
    </Container>
  );
};

export default NavTitle;
