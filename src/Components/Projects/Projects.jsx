import React from 'react';
import './Projects.css';
const projectsData = [
    {
      title: "Старт бизнеса",
      description:
        "Программа, разработанная для поддержки начинающих предпринимателей, включающая обучение, консультации и доступ к ресурсам для старта.",
    },
    {
      title: "Цифровой рынок",
      description:
        "Инициатива по развитию электронной коммерции, направленная на создание онлайн-платформ и поддержку малого бизнеса в интернете.",
    },
    {
      title: "Зеленая экономика",
      description:
        "Проекты, ориентированные на устойчивое развитие и экологическую ответственность в бизнесе и обществе.",
    },
    {
      title: "Образование будущего",
      description:
        "Разработка образовательных технологий и программ для школ, вузов и корпоративного обучения.",
    },
    {
      title: "Индустрия 4.0",
      description:
        "Программы внедрения цифровых технологий и автоматизации в производственные процессы для повышения их эффективности.",
    },
    {
      title: "Цифровая трансформация",
      description:
        "Инициативы, направленные на цифровизацию компаний и переход к новым технологиям в управлении и производстве.",
    },
    {
      title: "Инновационные решения",
      description:
        "Разработка технологических продуктов и услуг, которые меняют индустрии и открывают новые возможности.",
    },
    {
      title: "Глобальное партнерство",
      description:
        "Проекты международного сотрудничества, направленные на обмен опытом и создание глобальных сетей.",
    },
  ];
function Projects() {
  return (
    <section className="projects-container">
    <h2 className="projects-title">Наши проекты</h2>
    <div className="projects-grid">
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
  );
}

export default Projects;
