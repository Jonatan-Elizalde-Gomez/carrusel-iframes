import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listFiles } from "../Services/FilesService";

const GridComponent: React.FC = () => {
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    listFiles()
      .then((response) => {
        setLinks(response.archivos);
        console.log(response.archivos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container grid__component">
      <h2>Latest Featured Games</h2>
      <div className="row">
        {links.map((link, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
            <Link to={`/grid-item/${link}`} target="_self">
              <img
                src={`https://img.itch.zone/aW1nLzExODcyNDM4LnBuZw==/300x240%23c/yhH69R.png`}
                alt={`image-${index}`}
                width="200"
                height="200"
              />
              <div className="grid__game-title">Title game</div>
              <div className="grid__game-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
