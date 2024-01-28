import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
// import { useUpdateUserMutation } from "../services/appApi";

const UserDashboard = ({ userId, initialValues }) => {
  // const [updateUser, { isLoading, isError, error }] = useUpdateUserMutation();
  const [formData, setFormData] = useState({
    name: initialValues.name,
    email: initialValues.email,
    // password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await updateUser({ id: userId, ...formData });
  //     // Optionally, you can handle success or redirect the user.
  //   } catch (error) {
  //     // Handle error
  //   }
  // };

  return (
    <div>
      <h1>User Dashboard</h1>
      <div>
        <h2>Account Settings</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          {/* <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group> */}

          {/* <Button variant="primary" type="submit" disabled={isLoading}>
            Update Information
          </Button> */}
        </Form>

        {/* {isError && <Alert variant="danger">{error.data}</Alert>} */}
      </div>
    </div>
  );
};

export default UserDashboard;
