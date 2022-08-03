import "./App.css";
import React, { Component } from "react";
import { getInventory, checkInventory, sellItems } from "./AppService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordercount: null,
      orderamount: null,
    };
  }

  componentDidMount() {
    checkInventory().then((response) => {
      this.setState({
        ordercount: response.count,
        orderamount: response.amount,
      });
    });
  }

  addInventory = () => {
    console.log("Calling getInventory");
    getInventory().then((response) => {
      console.log("response " + response.count);
      this.setState({
        ordercount: response.count,
        orderamount: response.amount,
      });
    });
  };

  checkInv = () => {
    console.log("Calling checkInventory");
    checkInventory().then((response) => {
      console.log("response " + response.count);
      this.setState({
        ordercount: response.count,
        orderamount: response.amount,
      });
    });
  };

  sellItems = () => {
    console.log("Calling sellItems");
    sellItems().then((response) => {
      console.log("response " + response.count);
      this.setState({
        ordercount: response.count,
        orderamount: response.amount,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          ></link>
        </header>

        <body>
          <div class="container">
            <div class="row well mb-3">
              <div class="col-md 3 col-sm 3">
                <button
                  type="button"
                  class="btn btn-secondary btn-lg"
                  onClick={this.addInventory}
                >
                  Add inventory
                </button>
              </div>
              <div class="col-md 3 col-sm 3">
                <button
                  type="button"
                  class="btn btn-secondary btn-lg"
                  onClick={this.checkInv}
                >
                  Check inventory
                </button>
              </div>
              <div class="col-md 3 col-sm 3">
                <button
                  type="button"
                  class="btn btn-secondary btn-lg"
                  onClick={this.sellItems}
                >
                  Sell items
                </button>
              </div>
            </div>

            <div class="row well mb-3">
              <div class="col-md-6">
                <h5>
                  There are {this.state.ordercount} items in the globomantics
                  inventory and they are worth ${this.state.orderamount}
                </h5>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
