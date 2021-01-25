import React from "react";
import ReactDOM from "react-dom";
import { Subject } from "./subject";
import "./subject.css";
import mate from "./mate.jpg";
import chimie from "./chimie.jpg";
import engleza from "./engleza.jpg";
import romana from "./romana.jpg";
import fizica from "./fizica.jpg";
import franceza from "./franceza.jpg";
import biologie from "./biologie.jpg";
import tic from "./TIC.jpg";
import programare from "./programare.jpg";
import FadeIn from "react-fade-in";

//size of the image : 540x300

export class ListaMaterii extends React.Component {
  render() {
    return (
      <FadeIn>
        <div id="lista-materii">
          <Subject
            title="Matematică"
            img={mate}
            alt="Matematica"
            link="/lectie"
          />

          <Subject title="Lecții indisponibile" img={romana} alt="Romana" />
          <Subject title="Lecții indisponibile" img={chimie} alt="Chimie" />
          <Subject title="Lecții indisponibile" img={engleza} alt="Engleza" />
          <Subject title="Lecții indisponibile" img={fizica} alt="Fizica" />
          <Subject title="Lecții indisponibile" img={fizica} alt="Fizica" />
          <Subject title="Lecții indisponibile" img={franceza} alt="Franceza" />
          <Subject title="Lecții indisponibile" img={biologie} alt="Biologie" />
          <Subject
            title="Lecții indisponibile"
            img={programare}
            alt="Programare"
          />
          <Subject title="Lecții indisponibile" img={tic} alt="TIC" />
        </div>
      </FadeIn>
    );
  }
}
