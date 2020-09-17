import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, CardColumns } from "react-bootstrap";
import { itemActions } from "../../redux/actions/item.actions";
import ItemCard from "../../components/ItemCard";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Homepage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items); //get data from store redux

  useEffect(() => {
    dispatch(itemActions.itemsRequest());
  }, []);

  return (
    <>
      <Container>
        <h1>E-commerce store</h1>

        {/* {isAuthenticated && ( */}
        <Link to="/item/add">
          <Button class="" variant="primary">
            New item
          </Button>
        </Link>
        {/* )} */}

        <CardColumns>
          {Array.isArray(items)
            ? items.map((item) => <ItemCard {...item} />)
            : null}
        </CardColumns>
      </Container>
    </>
  );
};

export default Homepage;
