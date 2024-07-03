import React from "react";

import "./sobre-mi.css";

import Aside from "../components/aside";

function SobreMi() {
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
            Hice y terminé el colegio secundario en la Escuela Media 15 de Quilmes con orientación en Ciencias Naturales, en la cual obtuve el segundo mejor promedio.
			Comencé a estudiar Desarrollo Web en 2021 de manera autodidacta y continuo haciendolo hasta el dia de hoy. <br />
			En Julio de 2024 ingresé a un curso online de Desarrollo Web Full Stack en SoyHenry en el cual me mantengo actualmente.
          </p>
          <br />

          <h1>Tecnologías</h1>
          <hr className="hr-titulos" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            dicta nisi possimus tenetur accusamus alias nemo, asperiores nostrum
            vitae, soluta odit, modi ut? Culpa nam nihil sit, deleniti ullam
            dicta.
          </p>
        </div>
      </main>
    </>
  );
}

export default SobreMi;
