import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { useEffect } from "react";
import { Pencil, Trash } from "react-bootstrap-icons";

function UserPosts() {
  const { id } = useParams();
  const [userPost, setUserPost] = useState();
  const [postToEdit, setPostToEdit] = useState({});
  const [postToCreate, setPostToCreate] = useState({});

  // console.log(postToEdit);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => setUserPost(res.data));
  }, []);

  const findPostToEdit = (id) => {
    const postToEdit = userPost.find((e) => e.id == id);
    setPostToEdit(postToEdit);
  };
  const editPostPostToEdit = (value, parameter) => {
    const newPost = { ...postToEdit, [parameter]: value };
    setPostToEdit(newPost);
  };
  const editPostPostToCreate = (value, parameter) => {
    const newPost = { ...postToEdit, [parameter]: value };
    setPostToCreate(newPost);
  };
  const deleteHandler = (postId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        console.log(res);

        axios
          .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
          .then((res) => setUserPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const patchHandler = () => {
    axios
      .patch(
        `https://jsonplaceholder.typicode.com/posts/${postToEdit}`,
        postToEdit
      )
      .then((res) => {
        console.log(res);
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
          .then((res) => setUserPost(res.data));
      });
  };
  const createhHandler = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, postToCreate)
      .then((res) => {
        console.log(res);
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
          .then((res) => setUserPost(res.data));
      });
  };

  return (
    <Layout>
      <Row>
        <Row>
          <Col>
            <Form>
              <h2>Edit post {postToEdit.id}</h2>
              <FormGroup>
                <Input
                  id="exampletitle"
                  name="title"
                  placeholder="title"
                  type="title"
                  value={postToEdit && postToEdit.title}
                  onChange={(e) => editPostPostToEdit(e.target.value, "title")}
                />
              </FormGroup>{" "}
              <FormGroup>
                <Input
                  id="exampleBody"
                  name="body"
                  placeholder="body"
                  type="text"
                  value={postToEdit && postToEdit.body}
                  onChange={(e) => editPostPostToEdit(e.target.value, "body")}
                />
              </FormGroup>{" "}
              <Button onClick={patchHandler}>Submit</Button>
            </Form>
          </Col>
          <Col>
            <Form>
              <h2>Create post {postToEdit.id}</h2>
              <FormGroup>
                <Input
                  id="exampleId"
                  name="userId"
                  placeholder="userId"
                  type="text"
                  onChange={(e) =>
                    editPostPostToCreate(e.target.value, "userId")
                  }
                />
              </FormGroup>{" "}
              <FormGroup>
                <Input
                  id="exampletitle"
                  name="title"
                  placeholder="title"
                  type="title"
                  onChange={(e) =>
                    editPostPostToCreate(e.target.value, "title")
                  }
                />
              </FormGroup>{" "}
              <FormGroup>
                <Input
                  id="exampleBody"
                  name="body"
                  placeholder="body"
                  type="text"
                  onChange={(e) => editPostPostToCreate(e.target.value, "body")}
                />
              </FormGroup>{" "}
              <Button className="btn btn-success" onClick={createhHandler}>
                Create
              </Button>
            </Form>
          </Col>
        </Row>
        <Row ms={12}>
          {userPost &&
            userPost.map((e) => (
              <Card key={e.id} className="my-2" color="primary" outline>
                <CardHeader>postId : {e.id}</CardHeader>
                <CardBody>
                  <CardTitle tag="h5">{e.title}</CardTitle>
                  <CardText>{e.body}</CardText>
                </CardBody>
                <CardFooter className="d-flex flex-row-reverse">
                  <Button
                    className="btn btn-danger "
                    onClick={() => deleteHandler(e.id)}
                  >
                    <Trash></Trash>
                  </Button>
                  <Button
                    className="btn btn-warning "
                    style={{ marginRight: 10 }}
                    onClick={() => findPostToEdit(e.id)}
                  >
                    <Pencil></Pencil>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </Row>
      </Row>
    </Layout>
  );
}

export default UserPosts;
