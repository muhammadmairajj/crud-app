import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [users, setUsers] = useState([]);

    // useEffect:
    useEffect(() => {
     loadUser();
    }, []);

    // loadUser function to get data from json server
    const loadUser = async () => {
        const res = await axios.get('http://localhost:3003/users');
        // console.log(res.data);
        setUsers(res.data);
    }

    // deleteFunction:
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUser();
    }
    return (
        <div className="container">
      <div className="py-4">
        <h3 style={{textAlign:'center'}}>Home Page</h3>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
              <th scope="col">Action</th>
              {/* <th scope="col">
                <td>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>View</th>
                </td>
              </th> */}
            </tr> 
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-success mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    )
}

export default Home;