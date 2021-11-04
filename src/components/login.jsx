import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.png"
import {Link} from "react-router-dom"
import "../App.css"
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Login = () => {
    const [stype, setstype] = React.useState('');
    const [positon, setposition] = React.useState('');
    const [postionuser, setpostionuser] = React.useState('none');

  const handleChange = (event) => {
    setstype(event.target.value);
    setpostionuser('null')
  };

  const handleChangeposition = (event) => {
    setposition(event.target.value);
  };
  const handleChangepositionuser = (event) => {
    setpostionuser(event.target.value);
    
  };
    return (
        
           <div className="App">
               <div className="row">
           
                   <div className="col-md-6 backgroundImg" style={{height:"100vh"}}>
                      <div style={{marginTop:"10%"}} className="mar">
                          <img src={logo} width="25%" alt="logo" />
                       {/* <h3 style={{marginTop:"5%"}}>Sign In</h3>
                       <span style={{color:"#b7b7a4", fontSize:"13px"}}>Sign in to stay connected.</span> */}
                       <br />
                       <br />
                       <span style={{color:"#6b705c", fontSize:"12.5px"}}>Please enter your User Name and Password to Log In.</span>
                       <br />
                       <br />
                      
                       <TextField sx={{minWidth:"70%"}} id="standard-basic" label="User Name" variant="standard" />
                       <TextField  sx={{minWidth:"70%"}} id="standard-basic" type="password" label="Password" variant="standard" />
                       {/* <input className="px-2 py-2 mx-2 my-2 inpFoc" type="text" placeholder="User Name" />
                       
                       <input className="px-2 py-2 mx-2 my-2 inpFoc" type="password" placeholder="Password" /> */}
                       <FormControl variant="standard" sx={{ m: 1, minWidth: "70%" }}>
        <InputLabel id="demo-simple-select-standard-label">Select Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={stype}
          onChange={handleChange}
          label="Age"
        >
          
          <MenuItem value={10}>OJTI</MenuItem>
          <MenuItem value={20}>TRAINEE</MenuItem>
          <MenuItem value={30}>SOLO</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: "70%" }}>
        <InputLabel id="demo-simple-select-standard-label">Select Position</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={positon}
          onChange={handleChangeposition}
         label="positon"
        >
          
          <MenuItem value={10}>Demo</MenuItem>
          <MenuItem value={20}>Demo Position</MenuItem>
          
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: "70%" ,display:postionuser}}>
        <InputLabel id="demo-simple-select-standard-label">Select User</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={postionuser}
          onChange={handleChangepositionuser}
         label="positon"
        >
          
          <MenuItem value={10}>OMA</MenuItem>
      
          
        </Select>
      </FormControl>
      
                       {/* <select className="px-2 py-2 mx-2 my-2 inpFoc">
    <option selected style={{color:"gray"}}>Select Type</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>                        */}
                       {/* <select className="px-2 py-2 mx-2 my-2 inpFoc">
    <option selected>Select Position</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>                        */}


                        <div className="row">
                            <div className="col-md-6">
                            <input type="checkbox" id="rememberMe" /> <label htmlFor="rememberMe" style={{color:"#a5a58d", fontSize:"14px"}}>Remember me</label>
                            </div>
                            <div className="col-md-6">
                                <a href="#" className="link_style">Forgot Password?</a>
                            </div>
                        </div>

                        <button className="btn btn-danger px-5 my-5"> <Link to="/dashboard" className="anchor" >  Sign In </Link></button>

                       </div>
                   </div>
                   <div className="col-md-6 secback">
                       {/* <div className="bg-info" style={{height:"100vh", width:"90%"}}> */}

                       {/* </div> */}

                   </div>
               </div>
           </div>
     
    )
}

export default Login
