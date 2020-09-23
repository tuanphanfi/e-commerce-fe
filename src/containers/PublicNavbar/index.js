import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  Dropdown,
  Container,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/actions/";
import moduleName from "module";

const PublicNavbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const cart = useSelector((state) => state.item.cart);
  const [itemNum, setItemNum] = useState(0);

  const dispatch = useDispatch();

  const handleLogout = () => {
    // TODO: handle Logout
    dispatch(authActions.logOut());
  };

  useEffect(() => {
    if (cart && cart.length > 0) {
      setItemNum(cart.reduce((num, item) => num + item.quantity, 0));
    } else {
      setItemNum(0);
    }
  }, [cart]);

  const authLinks = (
    <Nav className="d-flex flex-row">
      <div className="d-flex flex-column">
        <Nav.Link as={Link} to="/dashboard">
          <i className="fa fa-chart-line" /> Tài Khoản
        </Nav.Link>

        <Nav.Link onClick={handleLogout}>
          <i className="fa fa-sign-out-alt" /> Đăng xuất
        </Nav.Link>
      </div>

      <Nav.Link as={Link} to="/item/cart">
        <div class="parentOfcart-quantity">
          <i
            class="fa fa-shopping-cart"
            style={{ "font-size": "40px", color: "rgb(100,100,100)" }}
          />
          <span class="cart-quantity"> {itemNum}</span>
        </div>

        {/* {JSON.stringify(cart)} */}
      </Nav.Link>
    </Nav>
  );
  const publicLinks = (
    <Nav class="d-flex flex-column">
      <Nav.Link as={Link} to="/register">
        Đăng ký
      </Nav.Link>
      <Nav.Link as={Link} to="/login" class="">
        Đăng nhập
      </Nav.Link>
    </Nav>
  );

  return (
    <>
      {/* top nav */}
      <div
        className="d-flex justify-content-center text-white py-2"
        style={{ backgroundColor: "#9b0e62" }}
      >
        <span>
          <strong>
            HỆ THỐNG PHÂN PHỐI NƯỚC HOA & MỸ PHẨM CHÍNH HÃNG HÀNG ĐẦU VIỆT NAM
            VỚI 50 CỬA HÀNG TRÊN TOÀN QUỐC
          </strong>
        </span>
      </div>

      {/* second
       nav
       second */}
      <Container>
        <div class="d-flex">
          <div className=" d-flex justify-content-center">
            <Link to="/">
              <img
                src="https://www.thegioinuochoa.com.vn/uploads/manual/logo/TGNH2020_1.jpg.pagespeed.ce.HWPc_F_LP1.jpg"
                alt=""
                height="100"
              />
            </Link>
          </div>

          {/* search bar */}
          <div className="d-flex justify-content-around align-items-center p-1">
            <div class="search_bar">
              <div className="mx-3">
                <input
                  class="search_input p-1 "
                  type="text"
                  name=""
                  placeholder="Tìm kiếm nước hoa hoặc nhãn hiệu..."
                />{" "}
                <div>
                  <a href="#" class="search_icon">
                    | <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* dropdown menu - chọn nhãn hiệu*/}
            <Dropdown class="" style={{ width: "250px" }}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Chọn nhãn hiệu
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Dior</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bvlgari</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Versace</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* log-in / log out */}
            <Form className="">
              {/* authLinks logout, publicLinks login */}
              {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
            </Form>
          </div>
        </div>

        {/* 3rd nav -
       nav menu 
       3rd nav*/}
        <Navbar class="text-danger" bg="" variant="">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Dropdown class="" style={{ width: "150px" }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <i class="fa fa-align-justify"></i>
              Danh mục
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Cho Nữ</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Cho Nam</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav className="mr-auto myNavigationMenuBar">
            <Nav.Link href="#home">SP KHUYẾN MÃI</Nav.Link>
            <Nav.Link href="#features">SP MỚI</Nav.Link>
            <Nav.Link href="#pricing">SP BÁN CHẠY</Nav.Link>
            <Nav.Link href="#pricing">SP THANH LÝ</Nav.Link>
          </Nav>

          <div class="hotline-list d-flex">
            <span class="hotline-icon" style={{}}>
              <i class="fa fa-phone"></i>
            </span>
            <div class="hotline-item d-flex flex-column-reverse">
              <span
                class="hotline-number"
                style={{ "font-size": "20px", "font-weight": "900" }}
              >
                <strong>1800 6047</strong>
              </span>
              <span class="hotline-info" style={{ "font-size": "10px" }}>
                (ĐẶT HÀNG) 8h30-21h30
              </span>
            </div>

            <span class="hotline-icon">
              <i class="fa fa-phone"></i>
            </span>

            <div class="hotline-item d-flex flex-column-reverse">
              <span
                class="hotline-number"
                style={{ "font-size": "20px", "font-weight": "900" }}
              >
                <strong>1800 6077</strong>
              </span>
              <span class="hotline-info" style={{ "font-size": "10px" }}>
                (CSKH) 8h30-17h00
              </span>
            </div>
          </div>
        </Navbar>
      </Container>

      <Navbar bg="dark" variant="dark"></Navbar>
    </>
  );
};

export default PublicNavbar;
