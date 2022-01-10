import React from "react";
import {
  Navbar,
  NavbarBrand,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Input,
  Col,
} from "reactstrap";
import web3 from "./web3";
import tsk from "./tsk";
import "./App.css";

class App extends React.Component {
  state = {
    eth: null,
    success: null,
    tsk: null,
    error: null,
  };

  componentDidMount() {
    web3.eth.getAccounts().then((addr) => console.log(addr));
  }

  swapfromETH = async () => {
    const accounts = await web3.eth.getAccounts();

    // console.log(tsk, this.state.eth);
    try {
      let ethBalance = web3.utils.fromWei(this.state.eth, "ether");
      this.setState({ tsk: ethBalance / 1 });
      await tsk.methods.swapFromETH(this.state.eth).send({
        from: accounts[0],
        // to: '0xCd4318F7D5bc40037b854f99De13369Ef993b543',
        value: this.state.eth,
      });
      this.setState({ success: true });
    } catch (e) {
      // if (this.state.eth === null || isNaN(this.state.eth) === false) {
      //   this.setState({ success: false });
      // }
      this.setState({ success: false });
      console.log("Error \n" + e);
    }
  };

  render() {
    let successMessage;
    if (this.state.success === true) {
      successMessage = (
        <Col xl="8">
          <Card
            style={{
              backgroundImage:
                "linear-gradient(to right, #ddd6f3 35%, #faaca8 100%)",
              padding: "10px",
              margin: "40px",
              marginLeft: "470px",
            }}
            inverse
          >
            <CardBody style={{ color: "black" }}>
              <CardTitle tag="h5">Success!</CardTitle>
              <CardText>You have received {this.state.tsk} TSK!</CardText>
            </CardBody>
          </Card>
        </Col>
      );
    } else if (this.state.success === false) {
      successMessage = (
        <Col xl="8">
          <Card
            style={{
              backgroundImage:
                "linear-gradient(to right, #ddd6f3 35%, #faaca8 100%)",
              padding: "10px",
              margin: "40px",
              marginLeft: "470px",
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
        </Col>
      );
    }
    return (
      <div className="App" style={{ minHeight: "100vh" }}>
        <div>
          <Navbar dark expand="md">
            <NavbarBrand
              href="/"
              style={{ fontSize: "25px", fontWeight: "bolder", color: "black" }}
            >
              Netvrk - Assignment
            </NavbarBrand>
          </Navbar>
        </div>
        <div>
          <Col xl="9">
            <Card
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ddd6f3 35%, #faaca8 100%)",
                padding: "20px",
                margin: "60px",
                marginLeft: "390px",
              }}
              inverse
            >
              <CardBody style={{ color: "black" }}>
                <CardTitle tag="h5">Swap ETH to TSK</CardTitle>
                <CardText>
                  {" "}
                  <Input
                    style={{ marginTop: "30px", marginBottom: "30px" }}
                    id="eth"
                    name="eth"
                    placeholder="Enter your ETH amount"
                    type="text"
                    onChange={(event) =>
                      this.setState({ eth: event.target.value })
                    }
                  />{" "}
                </CardText>
                <Button
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #aa076b 30%, #61045f 100%)",
                  }}
                  onClick={() => this.swapfromETH()}
                >
                  Swap
                </Button>
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
