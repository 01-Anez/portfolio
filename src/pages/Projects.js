import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
         <div className="fortalezas">
                <div className="fortaleza">
                    <img src="/imagenes/5g.png" alt="Fortaleza 1" />
                    <p>Velocidad</p>
                </div>
                <div className="fortaleza">
                    <img src="/imagenes/la-seguridad-cibernetica.png" alt="Fortaleza 3" />
                    <p>Seguridad</p>
                </div>
                <div className="fortaleza">
                    <img src="/imagenes/diseno-de-respuesta.png" alt="Fortaleza 2" />
                    <p>Diseño</p>
                </div>
            </div>
      <h2>Proyectos</h2>
      <div className="project-gallery">
        <div className="project-item">
          <h3>Nombre del Proyecto 1</h3>
          <p>Descripción breve del proyecto 1.</p>
          <a href="https://github.com/01-Anez?tab=repositories" target="_blank">Ver en GitHub</a>
        </div>
        <div className="project-item">
          <h3>Nombre del Proyecto 2</h3>
          <p>Descripción breve del proyecto 2.</p>
          <a href="https://github.com/01-Anez?tab=repositories" target="_blank">Ver en GitHub</a>
        </div>
        <div className="project-item">
          <h3>Nombre del Proyecto 3</h3>
          <p>Descripción breve del proyecto 3.</p>
          <a href="https://github.com/01-Anez?tab=repositories" target="_blank">Ver en GitHub</a>
        </div>
        <div className="project-item">
          <h3>Nombre del Proyecto 4</h3>
          <p>Descripción breve del proyecto 4.</p>
          <a href="https://github.com/01-Anez?tab=repositories" target="_blank">Ver en GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
