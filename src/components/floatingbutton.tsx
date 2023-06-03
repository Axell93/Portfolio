/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as Facebook } from "../assets/icons/facebook_color.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter_color.svg";
import { ReactComponent as Github } from "../assets/icons/github_color.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin_color.svg";

export enum social {
  FACEBOOK = "Facebook",
  TWITTER = "Twitter",
  GITHUB = "Githib",
  LINKEDIN = "LinkedIn",
}
export type SocialMedia =
  | social.FACEBOOK
  | social.GITHUB
  | social.LINKEDIN
  | social.TWITTER;
export interface IFloatButtonProps {
  social: SocialMedia;
}

export const FloatButton = (props: IFloatButtonProps) => {
  // const socialProp = props.social;
  // function renderSocialMedia(param: social) {
  //   switch (param) {
  //     case social.FACEBOOK:
  //       return <Facebook />;
  //     case social.GITHUB:
  //       return <Github />;
  //     case social.TWITTER:
  //       return <Twitter />;
  //     case social.LINKEDIN:
  //       return <Linkedin />;
  //     default:
  //       console.log("No Compatible Social Media Component found.");
  //   }
  // }
  return (
    <>
      <div className="float rounded-full bg-slate-800">
        <div id="header">
          <div className="cursor-pointer">
            <Facebook />
          </div>
          <div className="my-3 cursor-pointer">
            <Github fill="white" />
          </div>
          <div className="cursor-pointer">
            <Linkedin />
          </div>
        </div>
      </div>
    </>
  );
};

FloatButton.defaultProps = {
  social: social.FACEBOOK,
};
