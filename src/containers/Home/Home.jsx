import React, { Component } from 'react';

class Home extends Component {
    state = {
        name: "",
        image: "",
        email: ""
    }
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                      Name
                  </li>
                  <li className="nav-item">
                      Phone
                  </li>
                  <li className="nav-item">
                  </li>
                  <li className="nav-item">
                      Email
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default Home;
