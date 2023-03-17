import { Inter, Roboto } from "next/font/google";

import React from "react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  thumbnail: string | any;
  url: string;
  name: string;
  description: string;
}

const Card: React.FC<Props> = ({ thumbnail, url, name, description }) => {
  return (
    <a href={url} target="_blank">
      <div className="card">
        <img
          src={thumbnail}
          alt="project-thumbnail"
          style={{ width: "100%" }}
        />
        <div className="container">
          <h4 className={roboto.className}>
            <b>{name}</b>
          </h4>
          <p className={roboto.className}> {description} </p>
        </div>
      </div>
    </a>
  );
};

export default Card;
