import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [lastKey, setLastKey] = useState("");

  const play_ = (key) => {
    const audio = document.getElementById(key);
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
    audio.play();
    setLastKey(key);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      let key_ = e.key.toUpperCase();
      play_(key_);
    });
  }, []);

  return (
    <div className="d-flex min-vh-100 justify-content-center align-items-center">
      <div id="drum-machine">
        <div id="display">
          <h1 className="text-center my-3">
            <span className="badge bg-primary">{lastKey}</span>
          </h1>
        </div>
        <div className="row">
          <div className="col">
            <div id="Q-Pad" className="drum-pad" onClick={() => play_("Q")}>
              Q
              <audio
                className="clip"
                id="Q"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              ></audio>
            </div>
          </div>
          <div className="col">
            <div id="W-Pad" className="drum-pad" onClick={() => play_("W")}>
              W
              <audio
                className="clip"
                id="W"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              ></audio>
            </div>
          </div>
          <div className="col">
            <div id="E-Pad" className="drum-pad" onClick={() => play_("E")}>
              E
              <audio
                className="clip"
                id="E"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              ></audio>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div id="A-Pad" className="drum-pad" onClick={() => play_("A")}>
              A
              <audio
                className="clip"
                id="A"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              ></audio>
            </div>
          </div>
          <div className="col">
            <div id="S-Pad" className="drum-pad" onClick={() => play_("S")}>
              S
              <audio
                className="clip"
                id="S"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              ></audio>
            </div>
          </div>
          <div className="col">
            <div id="D-Pad" className="drum-pad" onClick={() => play_("D")}>
              D
              <audio
                className="clip"
                id="D"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              ></audio>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div id="Z-Pad" className="drum-pad" onClick={() => play_("Z")}>
              Z
              <audio
                className="clip"
                id="Z"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              ></audio>
            </div>
          </div>
          <div className="col">
            <div id="X-Pad" className="drum-pad" onClick={() => play_("X")}>
              X
              <audio
                className="clip"
                id="X"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              ></audio>
            </div>
          </div>
          <div className="col">
            <div id="C-Pad" className="drum-pad" onClick={() => play_("C")}>
              C
              <audio
                className="clip"
                id="C"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              ></audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
