import React from "react";
import "./service.css";

export const Service = () => {
  return (
    <div className="grid pt-7">
      <div className="col-6 grid border-1">
        <div className="col-3"></div>
        <h1 className="service-titre col-6">Mes Offres & Services</h1>
        <div className="col-3"></div>

        <div className="col-3"></div>
        <div className="col-6 grid">
          <i className="pi pi-minus col 1"></i>
          <div className="col-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ipsum quibusdam ad quas. Libero velit fugiat dolor
            magnam culpa vitae.
          </div>
          <div className="col-6" style={{ alignSeft: "end" }}>
            <svg viewBox="0 0 600 600">
              <path
                id="curve"
                d="M 300, 300
                m -300, 0
                a 300,300 0 1,0 600,0
                a 300,300 0 1,0 -600,0"
              />
              <text width="500">
                <textPath xlinkHref="#curve">
                  - Voir Tout Mes Offres & Services - Voir Tout Mes Offres &
                  Services
                </textPath>
                <div className="text"></div>
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1"></div>
      <div className="col-4">
        <div className="single">
          <h1>Web Developeur</h1>
          <div className="grid section">
            <div className="col-10">discuter</div>
            <div className="col-2 ">
              <i className="pi pi-arrow-up fleche"></i>
            </div>
          </div>
        </div>
        <div className="single">
          <h1>Web Developeur</h1>
          <div className="grid section">
            <div className="col-10">discuter</div>
            <div className="col-2 ">
              <i className="pi pi-arrow-up fleche"></i>
            </div>
          </div>
        </div>
        <div className="single">
          <h1>Web Developeur</h1>
          <div className="grid section">
            <div className="col-10">discuter</div>
            <div className="col-2 ">
              <i className="pi pi-arrow-up fleche"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
