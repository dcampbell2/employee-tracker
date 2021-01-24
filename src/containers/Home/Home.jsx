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
  handleInputChange = (event) => {
    const name = event.target.value;
    const value = event.target.value;
    const phoneFilter = this.state.data.filter((employee) => {
      return employee.phone.includes(value);
    });

    this.setState({
      [name]: value,
      data: phoneFilter,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">
            Welcome to the employee directory! Here you'll see a result of all
            available employees along with their non-sensitive information.
          </p>
          <hr className="my-4" />
          <p>
            Use the below text area to filter for a specifc employee by their
            phone number.
          </p>
          <input
            type="text"
            className="form-control"
            id="searchBox"
            onChange={this.handleInputChange}
          />
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
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
