import React from "react";
import LinkCard from "../link-card-component/LinkCard";
import type { LinkCardType } from "../../types/LinkCardType";
import InstagramLogo from "../../assets/instagramLogo.svg";
import LinkedinLogo from "../../assets/linkedinLogo.svg";
import GithubLogo from "../../assets/githubLogo.svg";
import LeetcodeLogo from "../../assets/leetcodeLogo.svg";
import ProfileImage from "../../assets/profile-image.png";
import BackgroundImage from "../../assets/background-image.jpg";

const linkCardData: LinkCardType[] = [
  {
    iconUrl: InstagramLogo,
    title: "Instagram",
    url: "https://www.instagram.com/sky.isnotmylimit/",
  },
  {
    iconUrl: LinkedinLogo,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/shubham-gupta-85b368218",
  },
  {
    iconUrl: GithubLogo,
    title: "GitHub",
    url: "https://github.com/skyisnotmylimit",
  },
  {
    iconUrl: LeetcodeLogo,
    title: "LeetCode",
    url: "https://leetcode.com/u/ShubhamGupta6306/",
  },
];

const Box: React.FC = () => {
  return (
    <div className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg max-w-sm mx-auto mt-16 rounded-2xl text-gray-900">
      <div className="rounded-t-2xl h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src={BackgroundImage}
          alt="Mountain"
        />
      </div>

      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden shadow-md">
        <img
          className="object-cover object-center w-full h-full"
          src={ProfileImage}
          alt="Profile"
        />
      </div>

      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-white drop-shadow">
          Shubham Gupta
        </h2>
        <p className="text-gray-100/80 font-semibold drop-shadow">
          Freelance Web Developer
        </p>
      </div>

      <div className="p-4 border-t-2 border-gray-100/80  mx-8 mt-4"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {linkCardData.map((card, index) => (
          <LinkCard
            key={index}
            iconUrl={card.iconUrl}
            title={card.title}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Box;
