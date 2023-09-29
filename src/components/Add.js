import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import uuid from "react-uuid";

function Add() {
  const [id, setId] = useState("");
  const [taskname, setTaskname] = useState("");
  const [taskdescription, setTaskdescription] = useState("");
  const [taskenquiry, setTaskenquiry] = useState("");

  useEffect(() => {
    setId(uuid());
  }, []);
  const location = useNavigate();
  const addtask = async (e) => {
    e.preventDefault();
    if (taskname == "" || taskdescription == "" || taskenquiry == "") {
      alert("enter details");
      return;
    }
    setId(uuid().slice(0, 3));
    const body = {
      id,
      taskname,
      taskdescription,
      taskenquiry,
    };
    const result = await axios.post("http://localhost:8000/task/create", body);
    alert(result.data);
    console.log(result);
    location("/");             
  };              
  return (
    <div className="container p-5 w-50">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="test"
            onChange={(e) => setTaskname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            type="test"
            onChange={(e) => setTaskdescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Enquirt</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setTaskenquiry(e.target.value)}
          />
        </Form.Group>
        <button
          className="editBtn"
          onClick={(e) => addtask(e)}
          variant="primary"
          type="submit"
        >
          Add
        </button>
        <Link to={"/"}>
          <button className="deletebtn" variant="primary" type="submit">
            Back
          </button>
        </Link>
      </Form>
    </div>
  );
}

export default Add;
