import React, { Component } from 'react';
import Nav from './Nav';
import Cont from './Cont';
import Footer from './Footer';
import './App.css';
//import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class App extends Component {
  render() {
    return (
      <div>

        <body>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          ></Box>
          <label>Email</label>
          <TextField
          id="filled-email-input"
          label="Email"
          autoComplete="current-password"
          variant="filled"
        />
          <label>Password</label>
          <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
          <Button variant="contained" color="success">Login</Button>
        </body>
      </div>
    );
  }
}


export default App;
