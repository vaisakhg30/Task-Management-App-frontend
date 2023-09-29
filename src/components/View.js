import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

function View() {
  const [task, setTask] = useState({});
  const params = useParams();
  console.log(params);

  const fetchData = async () => {
    const result = await axios.post(
      "http://localhost:8000/task/findone/" + params.email
    );
    setTask(result.data, "result");
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5 text-center w-50">
      <Card className="w-50 container">
        <Card.Body>
          <Card.Title>View Data</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Task Name: {task.taskname}</ListGroup.Item>
          <ListGroup.Item>
            Task Description: {task.taskdescription}
          </ListGroup.Item>
          <ListGroup.Item>Task Enquiry: {task.taskenquiry}</ListGroup.Item>
        </ListGroup>
      </Card>
      <Link to={"/"}>
        <button className="viewbtn2" variant="primary" type="submit">
          Back
        </button>
      </Link>
    </div>
  );
}

export default View;
