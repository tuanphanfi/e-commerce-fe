import { Card } from "react-bootstrap";
import React from "react";

const ItemCard = ({ title, content, price }) => {

  return (
    <Card>
      <Card.Img  variant="top" src="https://via.placeholder.com/160x100" />
      <Card.Body>
        <Card.Title className="test">{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
  <small className="text-muted">{price}</small>
      </Card.Footer>
    </Card>
  );
};

export default ItemCard;
