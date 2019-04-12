import React, { Component } from "react";

import { NavLink, Link } from "react-router-dom";
import classNames from 'classnames';
import TextField from "@material-ui/core/TextField";
import {  InputGroup,Jumbotron,Button, Nav, NavDropdown,Navbar,Form,FormControl,Container, Row, Col } from 'react-bootstrap';
import './Style.css'
import NavigationBar from "../navigationBar/NavigationBar";
import Footer from "../footer/Footer";

const font = "'Poppins', sans-serif";


class Home extends Component {

  handleChange = (event, value) => {
    this.setState({ value });
  };
  constructor(props) {
    super(props);
    this.state = {
      snackbarMessage: "",
      snackbarOpen: false,
    };
  }

  render() {
    const { value, opp } = this.state;
    const { classes } = this.props;
    return (
      <div style={{overflowX: "hidden"}}>
        <NavigationBar/>

        <form
                id="loginForm"
                autoComplete="off"
                action="save-to-log.php" method="POST"
              >
                <div className="col-md-12 col-12 textField" >
                  <TextField

                    id="email"
                    name="email"
                    label="Email"
                    type="mail"
                    value={this.state.name}
                    fullWidth
                    onChange={event => this.handleEmailChange(event)}
                    margin="normal"
                    variant="outlined"
                    error={this.state.emailError}
                  />
                </div>
                <div className="col-md-12 col-12 textField">
                  <TextField
                    id="email"
                    name="email"
                    label="Name"
                    type="mail"
                    value={this.state.name}
                    fullWidth
                    onChange={event => this.handleEmailChange(event)}
                    margin="normal"
                    variant="outlined"
                    error={this.state.emailError}
                  />
                </div>

                {/* <div className="col-md-12 col-12 textField"> */}
                {/* <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      /> */}
      {/* <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload your cv
        </Button>
      </label>
                </div> */}
                

                <Button
                    // disabled={this.checkEmpty() ? true : false}
                    // onClick={event => this.handleSubmit(event)}
                    color="primary"
                    variant="contained"
                    action="save-to-log.php" method="POST"
                  >
                    Submit
              </Button>


              </form>


        {/* <Container className="NavBar" align="center">
          <Row>
            <div className="col-md-6">
              Connaict LOGO
            </div>
            <div className="col-md-6">
              Already signed up?
              <a href="#">Login</a>
            </div>
          </Row>
        </Container> */}
          
        {/* <Jumbotron id="jumbotronColor"> */}
        


        <Row id="jumbotronColor">

<div className="col-lg-6 col-md-12 col-sm-12 col-12">

<Row >
  <div className="col-12  col-md-12" >
    <p id="FirstTitle">The Egypt FirstG</p>
  </div>
</Row>
<Row>
  <div className="col-12 col-md-12" >
    <p id="head">Talent Match-Making Platform</p>
  </div>
</Row>
<Row>
  <div className="col-12 col-md-12" >
    <p id="title">For Recruiters and Job Seekers</p>
  </div>
</Row>
<Row id="buttons">
    <div className="col-12 col-sm-12 col-md-12 col-lg-12" >

    <Link to="/candidates">
      <button id="CandbtnSubmit" class="btn" >
        Job Seekers
      </button>
    </Link>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-12" >
    <Link to="/recruiters">
      <button id="CombtnSubmit" class="btn" >
        Companies
      </button>
    </Link>
    
    </div>
    </Row>

</div>
<div className="col-md-6 d-none d-lg-block">
<img src={"./row1.png"} width="420px" height="300px"/>
</div>

<div className="col-sm-12 col-12 d-lg-none  .d-xl-block mobileImage">
<img src={"./row1.png"} className="homeImage"/>
{/* width="315px" height="169px" */}
                </div>

</Row>

          
      
          
              
        {/* </Jumbotron> */}
          
        <Footer/>
        </div>

    );
  }
}

export default Home;
