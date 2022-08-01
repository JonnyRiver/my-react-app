import React from "react";
import profilephoto from "../../assets/images/profilephoto.jpg";

function About() {
  return (
    <section className="my-5">
      <img
        src={profilephoto}
        className="my-img"
        style={{ width: "25%" }}
        alt="cover"
      />
      <div className="my-about">
        <p>
          My name is Jonathan Martin. I was born January 13th 1990 near Detroit,
          Michigan. I spent majority of my life in Michigan and have a lot of
          family there still. In 2014 my wife and I visited Charlotte, North
          Carolina and fell in love with it. We made the decision to start fresh
          and moved shortly after. After settling in, I was able to get a job
          working at Firestone Complete Auto Service. Having a passion for cars,
          I quickly moved up to become an ASE certified automotive technician. I
          have been in the automotive field for about 8 years now. I enjoy
          working on cars and learning new and upcoming automotive technology.
          Unfortunately, with the changing industry, I don't feel it is a good
          fit for me in this time of my life. So with that, I looked into a
          career in web developement. It is very exciting and challenging for
          me, which is very motivating. I have recently successfully finished
          the full stack web developement bootcamp at UNC.
        </p>
      </div>
    </section>
  );
}

export default About;
