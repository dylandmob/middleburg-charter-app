import React, { useState } from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Application from "./components/Application";
import Status from "./components/Status";
import logo from "./assets/middleburg-school.png";

const APPLICATION = "application";
const STATUS = "status";

export default function App() {
  const [activeItem, setActiveItem] = useState(APPLICATION);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Container>
      <Router>
        <Image src={logo} style={{ margin: "auto" }} />
        <Menu>
          <Link to="/application">
            <Menu.Item
              name={APPLICATION}
              active={activeItem === APPLICATION}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="/status">
            <Menu.Item
              name={STATUS}
              active={activeItem === STATUS}
              onClick={handleItemClick}
            />
          </Link>
        </Menu>
        <Route path="/application" component={Application} />
        <Route path="/status" component={Status} />
      </Router>
    </Container>
  );
}
