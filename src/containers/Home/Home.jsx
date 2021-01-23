import React, { Component } from "react";
import API from "../../utils/API/API";

class Home extends Component {
  state = {
    firstName: "",
    lastName: "",
    image: "",
    email: "",
  };

  componentDidMount() {
    API.getUsers()
      .then((res) => {
        this.setState({ firstName: res.data.results[0].name.first});
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <tr>
              <th scope="row">1</th>
              <td>{this.state.firstName}</td>
            </tr>
            {/* <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
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
