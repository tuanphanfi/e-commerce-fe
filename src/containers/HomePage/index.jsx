import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, CardColumns, Row, Col } from "react-bootstrap";
import { itemActions } from "../../redux/actions/item.actions";
import ItemCard from "../../components/ItemCard";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import MyCarousel from "../../components/MyCarousel";
const Homepage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items); //get data from store redux
  const currentUser = useSelector((state) => state.auth.user);

  const splitArrayIntoRows = (array) => {
    let tempArr = [];
    let chunk = 3;
    for (let i = 0; i < array.length; i += chunk) {
      tempArr.push(array.slice(i, i + chunk));
    }

    return tempArr;
  };

  console.log(splitArrayIntoRows(items));

  useEffect(() => {
    dispatch(itemActions.itemsRequest());
  }, []);

  return (
    <>
      <MyCarousel />
      <Container>
        <h1>E-commerce store</h1>

        {currentUser?.role && currentUser.role === "admin" && (
          <Link to="/item/add">
            <Button class="" variant="primary">
              New item
            </Button>
          </Link>
        )}
        {/* <ItemCard {...item} */}
        {Array.isArray(items)
          ? splitArrayIntoRows(items).map((row) => {
              return (
                <Row>
                  {" "}
                  {row.map((item) => (
                    <div className="col">
                      <ItemCard {...item} />
                    </div>
                  ))}
                </Row>
              );
            })
          : null}
      </Container>
    </>
  );
};

export default Homepage;
