import React, { Component } from "react";
import API from "../../utils/API/API";

class Home extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    API.getUsers()
      .then((res) => this.setState({ data: res.data.results }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">State/Territory</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((results) => {
              return (
                <tr>
                  <th scope="row"></th>
                  <td key={results.login.username}>{results.name.first}</td>
                  <td>{results.name.last}</td>
                  <td>{results.phone}</td>
                  <td>{results.email}</td>
                  <td>{results.location.city}</td>
                  <td>{results.location.state}</td>
                  <td>{results.location.country}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
