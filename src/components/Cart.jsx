import { ListGroup, Image, Card, Button, Table } from "react-bootstrap";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemActions } from "../redux/actions/item.actions";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const redirectTo = useSelector((state) => state.item.redirectTo);
  const history = useHistory();

  const cart = useSelector((state) => state.item.cart); //get data from store redux
  console.log(cart);

  const deleteCart = () => {
    dispatch(itemActions.deleteCart());
  };

  const checkOut = () => {
    dispatch(itemActions.checkOut());
    history.push("checkout_success");
  };

  // useEffect(() => {
  //   if (redirectTo) {
  //     if (redirectTo === "__GO_BACK__") {
  //       history.goBack();
  //       dispatch(itemActions.setRedirectTo(""));
  //     } else {
  //       history.push(redirectTo);
  //       dispatch(itemActions.setRedirectTo(""));
  //     }
  //   }
  // }, [redirectTo]);

  return (
    <div>
      <h1>GIỎ HÀNG CỦA BẠN</h1>

      <div className="d-flex flex-row-reverse">
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Hình</th>
              <th>Sản phẩm</th>
              <th>Đơn giá(VNĐ)</th>
              <th>Số lượng</th>
              {/* <th>Khuyến mãi(VNĐ)</th> */}
              <th>Thành tiền(VNĐ)</th>
            </tr>
          </thead>
          <tbody className="">
            {/* listOfItem */}
            {cart?.length > 0 &&
              cart.map((cartItem) => {
                const { title, content, price, imgSrc, _id } = cartItem.item;
                const quantity = cartItem.quantity;
                return (
                  <>
                    <tr>
                      {/* hình */}
                      <td className="tdImgCart">
                        <img classname="" src={imgSrc} alt="" />
                      </td>
                      {/* title */}
                      <td>
                        {title}
                        {/* {JSON.stringify(cart)} */}
                      </td>
                      {/* price */}
                      <td>{price.toLocaleString().replaceAll(",", ".")}</td>
                      {/* quantity */}
                      <td>{quantity}</td>
                      {/* total price */}
                      <td>
                        {(price * quantity)
                          .toLocaleString()
                          .replaceAll(",", ".")}
                      </td>
                    </tr>
                  </>
                );
              })}
            <tr>
              <td colspan="4"></td>
              <td colspan="1">
                Tổng tiền:{" "}
                {cart.length > 0
                  ? cart
                      .reduce(
                        (accumulators, num) =>
                          num.item.price * num.quantity + accumulators,
                        0
                      )
                      .toLocaleString()
                      .replaceAll(",", ".")
                  : null}
              </td>
            </tr>
          </tbody>
          {/* het map */}

          {/* checkout */}
          <ListGroup
            className="checkout d-inline-block bg-blue w-25"
            style={{ height: "1500 px" }}
          >
            <button className="checkout" onClick={deleteCart}>
              Xóa Giỏ Hàng
            </button>

            <button className="checkout" onClick={checkOut}>
              Thanh toán
            </button>
            {/* </ListGroup.Item> */}
          </ListGroup>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
