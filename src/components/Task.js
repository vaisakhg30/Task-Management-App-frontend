import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

function Task() {
  const [task, setTask] = useState([]);
  const [deleteData, setDeleteData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/task/find");
    setTask(result.data);
  };
  console.log(task);
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log(id, "id123");
    const result = await axios.post("http://localhost:8000/task/delete", {
      id: id,
    });
    setDeleteData(result.data);
    console.log(result.data, "result");
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <div className="container">
      <Link to={"/add"}>
        <div className="text-end me-4 mt-5">
          <button className="editBtn" variant="success">
            Add New Details{" "}
          </button>
        </div>
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Task Name</th>
            <th>Task Description</th>
            <th>Task Enquiry</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {task.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.taskname}</td>
              <td>{item.taskdescription}</td>
              <td>{item.taskenquiry}</td>
              <td>
                <Link to={"edit/" + item.taskenquiry}>
                  <button className="editBtn" variant="success">
                    Edit
                  </button>
                </Link>
                <Link to={"/view/" + item.taskenquiry}>
                  <button className="viewbtn" variant="info">
                    View
                  </button>
                </Link>
                <button
                  className="deletebtn"
                  onClick={() => handleDelete(item.id)}
                  variant="danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Task;
