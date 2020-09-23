import React from "react";
import { Carousel, Container } from "react-bootstrap";
const MyCarousel = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.thegioinuochoa.com.vn/uploads/manual/banner/2020/T9/FLASH-SALE-TGNH1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.thegioinuochoa.com.vn/uploads/manual/banner/2020/T9/thanh-ly.jpg.pagespeed.ce.7AjmsMysfK.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.thegioinuochoa.com.vn/uploads/manual/banner/2020/T9/FLASH-SALE-TGNH1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.thegioinuochoa.com.vn/uploads/manual/banner/2020/T9/web-saigon1.jpg.pagespeed.ce.3oMX1ql8u4.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.thegioinuochoa.com.vn/uploads/manual/banner/2020/T8/Web-TGNH.jpg.pagespeed.ce.EkUxqb4oH6.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.thegioinuochoa.com.vn/uploads/manual/banner/2020/T9/banner-50.jpg.pagespeed.ce.3dY31-7s1R.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            {/* <p> */}
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
            {/* </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default MyCarousel;
