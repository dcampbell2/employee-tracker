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
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <input
            type="text"
            className="form-control text-right"
            id="searchBox"
          />
        </div>
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
