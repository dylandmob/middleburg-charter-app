import React from "react";
import { List, Button, Image } from "semantic-ui-react";

export default function Status() {
  return (
    <List divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <Button>Add</Button>
        </List.Content>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/lena.png"
        />
        <List.Content>Lena</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated="right">
          <Button>Add</Button>
        </List.Content>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
        />
        <List.Content>Lindsay</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated="right">
          <Button>Add</Button>
        </List.Content>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/mark.png"
        />
        <List.Content>Mark</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated="right">
          <Button>Add</Button>
        </List.Content>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/molly.png"
        />
        <List.Content>Molly</List.Content>
      </List.Item>
    </List>
  );
}
