import React from "react";
import {
  Navbar,
  NavbarBrand,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Input,
  Col,
} from "reactstrap";
import "./App.css";

class App extends React.Component {
  state = {
    eth: null,
    success: null,
    tsk: null,
    error: null
  };

  render() {
    let successMessage;
    if (this.state.success === true) {
      successMessage = (<Col xl="8">
      <Card
      style={{
        backgroundImage:
          "linear-gradient(to right, #ddd6f3 35%, #faaca8 100%)",
        padding: "10px",
        margin: "40px", marginLeft: "470px"
      }}
      inverse
    >
      <CardBody style={{ color: "black" }}>
        <CardTitle tag="h5">Success!</CardTitle>
        <CardText>
          You have received {this.state.tsk} TSK!
        </CardText>
      </CardBody>
    </Card>
      </Col>);
    } else if (this.state.success === false) {
      successMessage = (<Col xl="8">
      <Card
      style={{
        backgroundImage:
          "linear-gradient(to right, #ddd6f3 35%, #faaca8 100%)",
        padding: "10px",
        margin: "40px", marginLeft: "470px"
      }}
      inverse
    >
      <CardBody style={{ color: "black" }}>
        <CardTitle tag="h5">Error!</CardTitle>
        <CardText>
          Error, you have not received any TSK. Please try again!
        </CardText>
      </CardBody>
    </Card>
      </Col>);
    }
    return (
      <div className="App" style={{ minHeight: "100vh" }}>
        <div>
          <Navbar dark expand="md">
            <NavbarBrand href="/" style={{ fontSize: "25px", fontWeight: "bolder", color: "black" }}>Netvrk - Assignment</NavbarBrand>
          </Navbar>
        </div>
        <div>
          <Col xl="9">
          <Card
          style={{
            backgroundImage:
              "linear-gradient(to right, #ddd6f3 35%, #faaca8 100%)",
            padding: "20px",
            margin: "60px", marginLeft: "390px"
          }}
          inverse
        >
          <CardBody style={{ color: "black" }}>
            <CardTitle tag="h5">Swap ETH to TSK</CardTitle>
            <CardText>
            {" "}
              <Input
                style={{marginTop: "30px", marginBottom: "30px"}}
                id="eth"
                name="eth"
                placeholder="Enter your ETH amount"
                type="text"
                onChange={(event) =>
                  this.setState({ eth: event.target.value })
                }
              />{" "}
            </CardText>
            <Button style={{backgroundImage:
              "linear-gradient(to right, #aa076b 30%, #61045f 100%)"}}
            onClick={() => this.swapfromETH()}>Swap</Button>
          </CardBody>
        </Card>
          </Col>
          {successMessage}
        </div>
      </div>
    );
  }
}

export default App;
