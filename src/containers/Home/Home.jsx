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
              <th scope="col">Employee</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((results) => {
              return (
                <tr>
                  <th scope="row"></th>
                  <td key={results.login.username}>{results.name.first}</td>
                  <td>{results.phone}</td>
                </tr>
              );
            })}
            {/* <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
