import React from "react";
import type { LinkCardType } from "../../types/LinkCardType";

const LinkCard: React.FC<LinkCardType> = ({ iconUrl, url, title }) => {
  return (
    <div
      className="flex items-center gap-2 w-full max-w-md p-2 backdrop-blur-md bg-white/30 border border-gray-200 shadow-md rounded-lg hover:bg-gray-50 transition duration-200 cursor-pointer"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="flex-shrink-0">
        <img
          src={iconUrl}
          alt={`${title} icon`}
          className="w-8 sm:w-6 h-8 sm:h-6 object-contain rounded"
        />
      </div>
      <div className="flex-grow text-center font-bold">
        <p className="text-gray-800 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl font-medium">
          {title}
        </p>
      </div>
    </div>
  );
};

export default LinkCard;
