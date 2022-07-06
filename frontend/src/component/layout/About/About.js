import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "mailto:sargcom123@gmail.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="ecom.png"
              alt="Founder"
            />
            <Typography>ECOMM</Typography>
            <Button onClick={visitInstagram} color="primary">
              Mail me
            </Button>
            <span>
              This is an Ecommerce wesbite made by Giri Sai .
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://github.com/codergiri12/ecommerce"
              target="blank"
            >
              <GitHubIcon className="youtubeSvgIcon" />
            </a>
            <a href="https://www.linkedin.com/school/national-institute-of-technology-kurukshetra/" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
