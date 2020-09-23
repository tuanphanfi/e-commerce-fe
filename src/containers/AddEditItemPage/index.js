import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { itemActions } from "../../redux/actions";

const AddEditItemPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    price: "",
    imgSrc: "",
  });
  const loading = useSelector((state) => state.item.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const selectedItem = useSelector((state) => state.item.selectedItem);
  const redirectTo = useSelector((state) => state.item.redirectTo);
  const addOrEdit = params.id ? "Edit" : "Add";

  useEffect(() => {
    if (addOrEdit === "Edit") {
      setFormData((formData) => ({
        ...formData,
        title: selectedItem.title,
        content: selectedItem.content,
      }));
    }
  }, [addOrEdit, selectedItem]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { title, content, price } = formData;
    if (addOrEdit === "Add") {
      dispatch(itemActions.createNewItem(formData));
    } else if (addOrEdit === "Edit") {
      dispatch(itemActions.updateItem(params.id, formData));
    }
  };

  const handleCancel = () => {
    history.goBack();
  };

  const handleDelete = () => {
    // TODO : popup confirmation modal
    dispatch(itemActions.deleteItem(selectedItem._id));
  };

  useEffect(() => {
    if (redirectTo) {
      if (redirectTo === "__GO_BACK__") {
        history.goBack();
        dispatch(itemActions.setRedirectTo(""));
      } else {
        history.push(redirectTo);
        dispatch(itemActions.setRedirectTo(""));
      }
    }
  }, [redirectTo]);

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <div className="text-center mb-3">
              <h1 className="text-primary">{addOrEdit} item</h1>
              <p className="lead">
                <i className="fas fa-user" />
              </p>
            </div>
            <Form.Group>
              <Form.Control
                type="text"
                required
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                required
                placeholder="Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                required
                placeholder="imgSrc"
                name="imgSrc"
                value={formData.imgSrc}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                as="textarea"
                rows="10"
                placeholder="Content"
                name="content"
                value={formData.content}
                onChange={handleChange}
              />
            </Form.Group>
            <ButtonGroup className="d-flex mb-3">
              {loading ? (
                <Button
                  className="mr-3"
                  variant="primary"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Submitting...
                </Button>
              ) : (
                <Button className="mr-3" type="submit" variant="primary">
                  Submit
                </Button>
              )}
              <Button variant="light" onClick={handleCancel} disabled={loading}>
                Cancel
              </Button>
            </ButtonGroup>
            {addOrEdit === "Edit" && (
              <ButtonGroup className="d-flex">
                <Button
                  variant="danger"
                  onClick={handleDelete}
                  disabled={loading}
                >
                  Delete Item
                </Button>
              </ButtonGroup>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEditItemPage;
