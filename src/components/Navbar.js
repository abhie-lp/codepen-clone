import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({download}) => {
  return (
    <>
      <span className="logo">Codepen Clone</span>
      <ul className="navbar">
        <li>
          <button
            onClick={() => download("html")}
            type="button"
            className="download-btn HTML"
          >
            <FontAwesomeIcon className="download-icon" size="sm" icon={faFileDownload} /> HTML
          </button>
        </li>
        <li>
          <button
            onClick={() => download("css")}
            type="button"
            className="download-btn CSS"
          >
            <FontAwesomeIcon className="download-icon" size="sm" icon={faFileDownload} /> CSS
          </button>
        </li>
        <li>
          <button
            onClick={() => download("js")}
            type="button"
            className="download-btn JS"
          >
            <FontAwesomeIcon className="download-icon" size="sm" icon={faFileDownload} /> JS
          </button>
        </li>
        <li>
          <button
            onClick={() => download("all")}
            type="button"
            className="download-btn ALL"
          >
            <FontAwesomeIcon className="download-icon" size="sm" icon={faFileDownload} /> ALL
          </button>
        </li>
      </ul>
    </>
  );
};

export default Navbar;