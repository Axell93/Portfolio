import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import { Button } from "./button";
import { forwardRef } from "react";
import { ReactComponent as Github } from "../assets/icons/github_outline.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin_outline.svg";
import { ReactComponent as Icon } from "../assets/pictures/icon.svg";

export const Footer = forwardRef((props, ref: any) => {
  return (
    <footer className="footer bottom-0 w-full ">
      <svg
        className="footer-wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          className="footer-wave-path"
          d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
        ></path>
      </svg>
      <div
        ref={ref}
        className="footer-content mx-4 py-10 flex flex-col justify-between md:flex-row"
      >
        <div className="footer-left flex flex-col self-center md:self-auto mb-10">
          <Icon />
          <h3 className="self-center md:self-auto">
            AxellCodes&copy; copyright 2023
          </h3>
        </div>
        <div className="footer-right flex flex-col self-center justify-between h-32 mb-4 pr-16">
          <div className="flex w-52 justify-between">
            <div className="pt-1.5">
              <LocationOnSharpIcon />
            </div>
            <span>
              <h2>Financial District</h2> <span>Hyderabad, Telangana</span>
            </span>
          </div>

          <div className="flex cursor-pointer">
            <p>
              <a href="mailto:enquiries@anuragcodes.com">
                <span className="mr-4">
                  <EmailSharpIcon />
                </span>
                enquiries@anuragcodes.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});
