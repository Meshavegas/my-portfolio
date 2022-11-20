import React from "react";
import "./sumaryse.css";
import Typewriter from "typewriter-effect";

const Sumaryse = () => {
  return (
    <div className="cardre grid">
      <div className="col-12 md:col-4">
        <div className="nom">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Salut, Je suis Mesha Vegas").start();
            }}
          />
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString("Developeur Web")

                .pauseFor(1000)
                .deleteAll()
                .typeString("Developeur Mobile")
                .start();
            }}
          />
        </div>
        <div className="quote">"un produit perfomant est un atout"</div>
      </div>
      <div className="image col-12 md:col-4">
        <img src="https://firebasestorage.googleapis.com/v0/b/mesha-vegas.appspot.com/o/medev.png?alt=media&token=f675a5b5-895f-4de6-b4e9-156db8af7f7c" />
      </div>
      <div className="address col-12 md:col-4">
        meshavegas@gmail.com
        <div className="btn-cv">
          <i className="pi pi-download"></i>
          Télécharger mon CV
        </div>
      </div>
    </div>
  );
};

export default Sumaryse;
