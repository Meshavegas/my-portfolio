import React from "react";
import { Menubar } from "primereact/menubar";
import "./topBar.css";
import { useState } from "react";

export const TopBar = () => {
  const [show, setShow] = useState(false);
  const start = (
    <img
      alt="logo"
      src="https://firebasestorage.googleapis.com/v0/b/mesha-vegas.appspot.com/o/logo%20oli2.jpg?alt=media&token=b4ae29ed-4b7a-40af-91e9-e12c18701d44"
      onError={(e) => (e.target.src = "https://mesha-vegas.web.app/")}
      height="40"
      className="mr-2"
    ></img>
  );
  const end = <span>+00237 681 41 57 23</span>;
  return (
    <nav className="navigation">
      {/* <Menubar
        model={items}
        start={start}
        className="topBar"
        style={{ justifyContent: "center", background: "none", border: "none" }}
        end={end}
      /> */}
      <a href="/" className="brand-name">
        {" "}
        <img
          alt="logo"
          src="https://firebasestorage.googleapis.com/v0/b/mesha-vegas.appspot.com/o/logo%20oli2.jpg?alt=media&token=b4ae29ed-4b7a-40af-91e9-e12c18701d44"
          onError={(e) => (e.target.src = "https://mesha-vegas.web.app/")}
          height="40"
          className="mr-2"
        ></img>{" "}
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setShow(!show);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={show ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Travaux</a>
          </li>
          <li>
            <a href="">Temoignage</a>
          </li>
          <li className="numero">
            <a href="">+237 681 415 723</a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h3>
          <i className="pi pi-phone">{"  "}</i>
          +237 681 415 723
        </h3>
      </div>
    </nav>
  );
};
