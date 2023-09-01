import React from 'react';
import './App.css';

const App = () => {
  return (
      <div className="App">
        <h1 id="title">Nikolas Graham's Projects</h1>
        <hr />
        <h2>Smart Mirror Project (Senior Capstone) : <a href="https://dev.d1l5gpg1o662so.amplifyapp.com/login">link</a></h2>
          <p>
              Smart Mirror group project that integrated Git, React Hooks and MongoDB.
          </p>
          <p>
              This project has user authentication, voice control, gesture control and facial recognition
          </p>
          <p>
              This PWA features different pages that we controlled access using a router, and each different page contains
              different features such as:<br /> games, Wikipedia search, facial feature recognition, weather and more.
          </p>
        <hr />
  );
};

export default App;
