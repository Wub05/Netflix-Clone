import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className=" text-white leading-[2.2rem] text-sm font-light">
      <div className="flex justify-center items-center gap-30">
        <div>
          <div className="flex justify-between items-center">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <ul>
            <li>Audio Descriptions</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie References</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="ml-[18%] bg-primary">
        <div>
          <div>
            <p>Service Code</p>
          </div>
          <div>&copy; 1997-2025 Netflix, Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
