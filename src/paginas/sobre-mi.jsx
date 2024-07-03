import React, { useEffect, useState, useRef } from "react";

import "./sobre-mi.css";

import Aside from "../components/aside";

const ProgressCard = ({ technology, percentage, onClose }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${percentage}%`;
    }
  }, [percentage]);

  return (
    <div className="card">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <h2>{technology}</h2>
      <div className="progress-bar">
        <div className="progress" ref={progressRef}></div>
      </div>
      <p className="knowledge-text">
        {percentage}% <span> De conocimiento</span>
      </p>
    </div>
  );
};

function SobreMi() {
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const technologies = [
    { name: "HTML", percentage: 98 },
    { name: "CSS", percentage: 95 },
    { name: "JS", percentage: 80 },
    { name: "React", percentage: 75 },
  ];

  const handleTechnologyClick = (tech) => {
    setSelectedTechnology(tech);
  };

  const handleCloseCard = () => {
    setSelectedTechnology(null);
  };

  return (
    <>
      <Aside></Aside>

      <main className="container-sobre-mi">
        <nav>
          <p className="links-nav">Sobre Mi</p>
          <p className="links-nav">Proyectos</p>
          <p className="links-nav">Contacto</p>
        </nav>

        <div className="container-info-sobre-mi">
          <h1>Sobre Mi</h1>
          <hr className="hr-titulos" />
          <p className="info-txt">
            Me llamo Ezequiel Ramos Lencina. Tengo 18 años de edad, soy de
            Argentina, Buenos Aires. Desde los 9 años me comenzó a interesar
            todo lo que este relacionado a la Tecnologia, programación de
            diferentes ramas, ya sea Web, Videojuegos, Aplicaciones etc. <br />
            También me gusta mucho la Física y la Astronomía desde que tengo 8
            años.
          </p>
          <br />

          <h1>Educación</h1>
          <hr className="hr-titulos" />
          <p className="info-txt">
            Hice y terminé el colegio secundario en la Escuela Media 15 de
            Quilmes con orientación en Ciencias Naturales, en la cual obtuve el
            segundo mejor promedio. Comencé a estudiar Desarrollo Web en 2021 de
            manera autodidacta y continuo haciendolo hasta el dia de hoy. <br />
            En Julio de 2024 ingresé a un curso online de Desarrollo Web Full
            Stack en SoyHenry en el cual me mantengo actualmente.
          </p>
          <br />

          <h1>Tecnologías</h1>
          <hr className="hr-titulos" />
          <div className="container-tecnologias">
            {technologies.map((tech) => (
              <img
                key={tech.name}
                src={`public/iconos-tecnologias/${tech.name}.png`}
                alt={tech.name}
                className="imgs-tecnologias"
                onClick={() => handleTechnologyClick(tech)}
              />
            ))}
          </div>
          {selectedTechnology && (
            <ProgressCard
              technology={selectedTechnology.name}
              percentage={selectedTechnology.percentage}
              onClose={handleCloseCard}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default SobreMi;
