import logo from "./logo.svg";
import "./App.css";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";

function App() {
  const [isOver, setIsOver] = useState(true);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  const onPlayerPause: YouTubeProps["onPause"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  const onPlayerEnd: YouTubeProps["onEnd"] = (event) => {
    setIsOver(!isOver);
  };

  const height = window.innerHeight;
  const width = window.innerWidth;

  const opts = {
    height: height / 3,
    width: width,
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2 id="header">Pimpek SE</h2>
          <div className="player-container">
            <YouTube
              videoId={isOver ? "aqAlmzyzURQ" : "eQomPob3uqY"}
              opts={opts}
              onReady={onPlayerReady}
              onPause={onPlayerPause}
              onEnd={onPlayerEnd}
            ></YouTube>
          </div>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/aqAlmzyzURQ?si=Xyp1NtMojeZE4670" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </header>
      </div>

      <mainBanner />

      <div className="content">
        <div className="field-trip">
          <div className="stop">
            <p>Okuplanje kod Tome</p>
          </div>
          <div className="n-stop">
            <p>Okuplanje kod Marijane</p>
          </div>
        </div>
        <div className="field-trip">
          <div className="stop">
            <p>Pohod na mladu</p>
          </div>
          <div className="n-stop">
            <p>Misa u na kvartiću</p>
          </div>
        </div>
        <div className="field-trip">
          <div className="stop">
            <p>Dernek u Spoonu</p>
          </div>
          <div className="n-stop"></div>
        </div>
      </div>
      <div className="footer">
        <p>@Tomo Studio@</p>
      </div>
    </>
  );
}
export default App;

function mainBanner() {
  return (
    <div className="ulockd-home-slider">
      <div className="container-fluid">
        <div className="row">
          <div className="pogoSlider" id="js-main-slider">
            <div
              className="pogoSlider-slide"
              data-transition="zipReveal"
              data-duration="1500"
              style="background-image:url(images/slider-01.jpg);"
            >
              <div className="lbox-caption">
                <div className="lbox-details">
                  <h1>#Leida & #Dominic</h1>
                  <h2>We're getting married</h2>
                  <p>
                    Save The Date <strong>20 June 2018</strong>
                  </p>
                  <a href="#" className="btn ">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div
              className="pogoSlider-slide"
              data-transition="blocksReveal"
              data-duration="1500"
              style="background-image:url(images/slider-02.jpg);"
            >
              <div className="lbox-caption">
                <div className="lbox-details">
                  <h1>#Leida & #Dominic</h1>
                  <h2>We're getting married</h2>
                  <p>
                    Save The Date <strong>20 June 2018</strong>
                  </p>
                  <a href="#" className="btn ">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div
              className="pogoSlider-slide"
              data-transition="shrinkReveal"
              data-duration="2000"
              style="background-image:url(images/slider-03.jpg);"
            >
              <div className="lbox-caption">
                <div className="lbox-details">
                  <h1>#Leida & #Dominic</h1>
                  <h2>We're getting married</h2>
                  <p>
                    Save The Date <strong>20 June 2018</strong>
                  </p>
                  <a href="#" className="btn">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
