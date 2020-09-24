import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { orderActions } from "../../redux/actions/order.actions";
import { Table } from "react-bootstrap";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const loading = useSelector((state) => state.order.loading);

  useEffect(() => {
    dispatch(orderActions.ordersRequest());
  }, []);
  console.log(orders);
  if (loading) return <>Loading</>;
  return (
    <div className="container">
      <h1 className="text-center text-danger">Account details</h1>
      {/* {JSON.stringify(orders)} */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Order</th>
            <th>Price</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {orders.map((item) => {
              return (
                <div>
                  <h1>{item.totalPrice}</h1>
                  <h1>{item._id}</h1>
                </div>
              );
            })}{" "}
      
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DashboardPage;
