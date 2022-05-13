//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Carlist from './Carlist.js'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <div>
       <AppBar position='static'>
        <Toolbar>
          <Typography variant="6">
              My carshop
          </Typography>
        </Toolbar>
      </AppBar>
     
      <Carlist />
     
    </div>
  );
}

export default App;
