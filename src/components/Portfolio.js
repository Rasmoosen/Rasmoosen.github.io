import React from 'react';

function Portfolio() {
  const projects = [
    { id: 1, name: 'Data Strategy Roadmap', description: 'Developed and executed a comprehensive data strategy, consolidating data sources and migrating to a single Tableau site.' },
    { id: 2, name: 'Embedded Dashboard', description: 'Deployed an embedded dashboard for the outbound marketing team, increasing transparency and adding gamification aspects.' },
    { id: 3, name: 'Executive KPI Visualization', description: 'Created an executive KPI visualization outlining key drivers for revenue booking and overall company financial health.' },
  ];

  return (
    <section className="portfolio">
      <h2 className="text-3xl font-bold mb-6">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
