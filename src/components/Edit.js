import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [taskname, setTaskname] = useState("");
  const [taskdescription, setTaskdescription] = useState("");
  const [taskenquiry, setTaskenquiry] = useState("");
  const location = useNavigate();
  const params = useParams();

  const fetchData = async () => {
    const result = await axios.post(
      "http://localhost:8000/task/findone/" + params.email
    );
    console.log(result);
    setTaskname(result.data.taskname);
    setTaskdescription(result.data.taskdescription);
    setTaskenquiry(result.data.taskenquiry);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleupdate = async (e) => {
    e.preventDefault();
    if (taskname == "" || taskdescription == "" || taskenquiry == "") {
      alert("enter details");
      return;
    }
    const body = {
      taskname,
      taskdescription,
      taskenquiry,
    };
    console.log(body);

    const result = await axios.put(
      "http://localhost:8000/task/update/" + params.email,
      body
    );
    console.log(result.data);
    alert(result.data);
    location("/");
  };

  return (
    <div className="container p-5 w-50">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="test"
            value={taskname}
            onChange={(e) => setTaskname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            type="test"
            value={taskdescription}
            onChange={(e) => setTaskdescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task Enquiry</Form.Label>
          <Form.Control
            type="test"
            value={taskenquiry}
            onChange={(e) => setTaskenquiry(e.target.value)}
          />
        </Form.Group>

        <button
          className="editBtn"
          onClick={(e) => handleupdate(e)}
          variant="primary"
          type="submit"
        >
          Update
        </button>
        <Link to={"/"}>
          <button className="viewbtn2" variant="primary" type="submit">
            Back
          </button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;
