import logo from './logo.svg';
import './App.css';
import liff from '@line/liff';
import { useEffect, useState } from 'react';

function App() {

  const logout = () => {
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=https://google.recruit-api.site&client_id=814625486934-s58kvqgcqvlr58ik4lrskphrlase2ioi.apps.googleusercontent.com";
  }

  
  return (
    <div className="App">
      <header className="App-header">
      <div style={{ textAlign: "center" }}>
        <h1>React with LINE Login test bot1</h1>
        <hr/>
        <img width="300px" height="300px"/>
        <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>id token: </b> idToken</p>
        <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>display name: </b> displayName</p>
        <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>status message: </b> statusMessage</p>
        <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>user id: </b> userId</p>

        <button onClick={() => logout()} style={{ width: "100%", height: 30 }}>Logout</button>
      </div>
      </header>
    </div>
  );
}

export default App;
