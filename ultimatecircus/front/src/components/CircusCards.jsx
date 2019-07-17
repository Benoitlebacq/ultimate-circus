import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CircusCards = props => (
  <Card>
    <Image src={props.url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>
        <span className="typocards">{props.name}</span>
      </Card.Header>
      <Card.Meta>
        <span className="ability">{props.ability}</span>
      </Card.Meta>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default CircusCards;
