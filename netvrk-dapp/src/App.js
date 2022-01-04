import React from "react";
import {
  Navbar,
  NavbarBrand,

} from "reactstrap";
import './App.css';

class App extends React.Component {
  state ={
    
  }

  render() {
    return (
      <div className="App" style={{ minHeight: '100vh'}}>
        <div>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">
                Netvrk - Assignment
              </NavbarBrand>
            </Navbar>
          </div>
        
      </div>
    );
  }
  }
  

export default App;
