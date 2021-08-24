import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Container from "./dietTable";
import MyApp from "./calendarR";
import Preview from "./preview";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <body>
        <header className="App-header">
          <div className="logo">
            <button className="title">Body Check</button>
          </div>
          <div className="icon">
            <i className="icon-signal"></i>
            <i className="icon-my"></i>
          </div>
        </header>
        <hr></hr>
        <section>
          <div className="left">
            <div className="calendar">
            <Link to='/main/exerLabel'>운동정의</Link>
              <MyApp />
            </div>
            <div className="diet-table">
              <Container />
            </div>
          </div>

          <div className="right">
            <div className="exercise-table"></div>
            <div className="media-upload">
              <p className="media">미디어 업로드</p>
              <Preview />
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;