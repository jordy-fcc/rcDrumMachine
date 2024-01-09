import React from "react";
import "./drummachine.min.css";
import { useState, useEffect } from "react";

function DrumMachine() {
  const [currSample, setSample] = useState("-");

  const sampleGrid = {
    Q: "KICK",
    W: "KICK 'N HAT",
    E: "HI-HAT",
    A: "HEATER",
    S: "HEATER #2",
    D: "HEATER #3",
    Z: "HEATER #4",
    X: "CLOSED HI-HAT",
    C: "CLAP",
  };

  const handleClick = (sampID) => {
    setSample(sampleGrid[sampID]);
    document.getElementById(sampID).currentTime = 0;
    document.getElementById(sampID).play();
    
    setTimeout(() => {

     }, 100);
  };

  useEffect(() => {
    document.addEventListener("keydown", (press) => {
      if (sampleGrid[press.key.toUpperCase()]) {
        handleClick(press.key.toUpperCase());
      }
    }); // eslint-disable-next-line
  }, []);

  return (
    <div className="backgroundWrapper">
      <div className="flexWrapper">
        <div id="drum-machine">
          <div id="display">
            <p className="nowPlaying">
              NOW PLAYING:<span className="play">{currSample}</span>
            </p>
          </div>
          <div id="buttons">
            <div className="row">
              <button onClick={() => handleClick("Q")} id="kick" className="drum-pad">
                <audio src={require("./audio/Kick.mp3")} className="clip" id="Q"></audio>Q
              </button>
              <button onClick={() => handleClick("W")} id="kickHat" className="drum-pad">
                <audio src={require("./audio/Kick-n-hat.mp3")} className="clip" id="W"></audio>W
              </button>
              <button onClick={() => handleClick("E")} id="hiHat" className="drum-pad">
                <audio src={require("./audio/Hi-Hat.mp3")} className="clip" id="E"></audio>E
              </button>
            </div>
            <div className="row">
              <button onClick={() => handleClick("A")} id="heater" className="drum-pad">
                <audio src={require("./audio/Heater.mp3")} className="clip" id="A"></audio>A
              </button>
              <button onClick={() => handleClick("S")} id="heaterTwo" className="drum-pad">
                <audio src={require("./audio/Heater-two.mp3")} className="clip" id="S"></audio>S
              </button>
              <button onClick={() => handleClick("D")} id="heaterThree" className="drum-pad">
                <audio src={require("./audio/Heater-three.mp3")} className="clip" id="D"></audio>D
              </button>
            </div>
            <div className="row">
              <button onClick={() => handleClick("Z")} id="heaterFour" className="drum-pad">
                <audio src={require("./audio/Heater-four.mp3")} className="clip" id="Z"></audio>Z
              </button>
              <button onClick={() => handleClick("X")} id="closedHiHat" className="drum-pad">
                <audio src={require("./audio/Closed-HiHat.mp3")} className="clip" id="X"></audio>X
              </button>
              <button onClick={() => handleClick("C")} id="clap" className="drum-pad">
                <audio src={require("./audio/Clap.mp3")} className="clip" id="C"></audio>C
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;
