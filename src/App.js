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
        <h2>ThankU Moments : <a href="https://dev.d2zibspy7fyk5y.amplifyapp.com/">link</a></h2>
          <p>
              This application serves as a modern integration of the pain of writing, stamping, and sending thank
              yous for any occasion.
          </p>
          <p>
              Made to make life easier for weddings, large gatherings, or even just a couple friends.
          </p>
          <p>
              With a very intuitive design and easy UI, it makes it simple for users to send their thank you's in the
              modern world.
          </p>
          <hr />
      </div>
  );
};

export default App;
