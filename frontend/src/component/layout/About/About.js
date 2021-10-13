import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "mailto:girisai.nemali1234@gmail.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="myimg.jpg"
              alt="Founder"
            />
            <Typography>Giri SaiNath Reddy</Typography>
            <Button onClick={visitInstagram} color="primary">
              Mail me
            </Button>
            <span>
              This is an Ecommerce wesbite made by @Giri Sai. My purpose was to learn MERN stack in detail and implement the knowledge which learned during my Btech Career.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://github.com/codergiri12"
              target="blank"
            >
              <GitHubIcon className="youtubeSvgIcon" />
            </a>
            <a href="https://www.linkedin.com/in/giri-sai-nath-reddy-4124731b0/" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
