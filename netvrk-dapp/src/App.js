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
  };

  render() {
    return (
      <div className="App" style={{ minHeight: "100vh" }}>
        <div>
          <Navbar dark expand="md">
            <NavbarBrand href="/" style={{ fontSize: "20px", fontWeight: "bolder" }}>Netvrk - Assignment</NavbarBrand>
          </Navbar>
        </div>
        <div>
          <Col xl="9">
          <Card
          style={{
            backgroundImage:
              "linear-gradient(to right, #ddd6f3 35%, #faaca8 100%)",
            padding: "20px",
            margin: "90px", marginLeft: "390px"
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
            <Button>Swap</Button>
          </CardBody>
        </Card>
          </Col>
          
        </div>
      </div>
    );
  }
}

export default App;
