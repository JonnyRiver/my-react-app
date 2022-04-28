import React from "react";
import dreamjournal from "../../assets/images/dreamjournal.png";
// import horiseonapp from "../../assets/images/horiseonapp.png";
// import runsnipit from "../../assets/images/runsnipit.png";
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
          alt="Card image cap"
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
          {/* <a
            href="https://github.com/polizoto/renaissance-rags"
            title="Go to Renaissance Rags github repository"
            rel="noopener"
            target="_blank"
          ></a> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
