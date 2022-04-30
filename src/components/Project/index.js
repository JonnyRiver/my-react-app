import React from "react";
import dreamjournal from "../../assets/images/dreamjournal.png";
import renaissancerags from "../../assets/images/renaissancerags.png";
import horiseonapp from "../../assets/images/horiseonsnip.png";
import runsnipit from "../../assets/images/runsnipit.png";
// import workdayschedule from "../../assets/images/workdayschedule.png";

const Project = () => {
  return (
    <div className="container">
      <div className="card col-sm-6">
        <img src={dreamjournal} className="card-img-top" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Dream Journal</h5>
          <br></br>
          <a
            href="https://frozen-atoll-87689.herokuapp.com/"
            title="Go to Dream Journal website"
            rel="noopener"
            target="_blank"
          >
            Live Site
          </a>
          <br></br>
          <a
            href="https://github.com/JonnyRiver/Dream-Journal"
            title="Go to Dream Journal github repository"
            rel="noopener"
            target="_blank"
          ></a>
        </div>
      </div>

      <div className="card col-sm-6">
        <img
          src={renaissancerags}
          className="card-img-top"
          alt="renaissance rags image"
        />
        <div className="card-body">
          <h5 className="card-title">Renaissance Rags</h5>
          <br></br>
          <a
            href="https://whispering-fjord-16472.herokuapp.com/"
            title="Go to Renaissance Rags website"
            rel="noopener"
            target="_blank"
          >
            Live Site
          </a>
          <br></br>
          <a
            href="https://github.com/polizoto/renaissance-rags"
            title="Go to Renaissance Rags github repository"
            rel="noopener"
            target="_blank"
          ></a>
        </div>
      </div>

      <div className="card col-sm-6">
        <img src={horiseonapp} className="card-img-top" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Horiseon App</h5>
          <br></br>
          <a
            href="https://jonnyriver.github.io/Horiseon/"
            title="Go to Horiseon App website"
            rel="noopener"
            target="_blank"
          >
            Live Site
          </a>
          <br></br>
          <a
            href="https://github.com/JonnyRiver/Horiseon"
            title="Go to Horiseon App github repository"
            rel="noopener"
            target="_blank"
          ></a>
        </div>
      </div>

      <div className="card col-sm-6">
        <img src={runsnipit} className="card-img-top" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Run Buddy Website</h5>
          <br></br>
          <a
            href="https://jonnyriver.github.io/run-buddy/"
            title="Go to Run Buddy website"
            rel="noopener"
            target="_blank"
          >
            Live Site
          </a>
          <br></br>
          <a
            href="https://github.com/JonnyRiver/run-buddy"
            title="Go to Run Buddy github repository"
            rel="noopener"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Project;
