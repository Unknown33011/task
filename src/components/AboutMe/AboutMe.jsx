import React from "react";
import aboutMe from "../assets/aboutMe-profile-img.png";
import "../AboutMe/AboutMe.css";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";

const AboutMe = () => {
  return (
    <div className="block_aboutMe">
      <div className="aboutMe_left_block">
        <img className="aboutMe_profile_img" src={aboutMe} />
      </div>
      <div className="aboutMe_right_block">
        <h1 className="aboutMe_right_block_title">ABOUT ME</h1>
        <p className="aboutMe_right_block_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas
          facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et.
          Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit
          molestie fermentum odi euismod.
        </p>
        <button className="aboutMe_block_btn">Let's Chat</button>
        <div className="aboutMe_block_icons">
          <img src={google} alt="" className="aboutMe_icons" />
          <img src={facebook} alt="" className="aboutMe_icons" />
          <img src={insta} alt="" className="aboutMe_icons" />
          <img src={twitter} alt="" className="aboutMe_icons" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
