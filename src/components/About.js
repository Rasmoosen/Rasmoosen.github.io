import React from 'react';

function About() {
  return (
    <section className="about">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Hey there! I'm Joseph Rasmussen</h3>
        <p className="text-lg">I'm a data enthusiast with a knack for turning numbers into actionable insights. Currently, I'm rocking the role of Director of Business Intelligence at Spring Venture Group in Kansas City, where I get to play with data all day long.</p>
        
        <h4 className="text-xl font-semibold">My Journey</h4>
        <p className="text-lg">I started out as a Chemical Engineering grad from the University of Kansas (Rock Chalk!), but an MBA from UMKC's Bloch School of Management led me to my love of data. Talk about a career pivot!</p>
        
        <h4 className="text-xl font-semibold">What I Do</h4>
        <ul className="list-disc list-inside text-lg">
          <li>Crafting data strategies that make sense of the chaos</li>
          <li>Building cool dashboards that make people go "Wow!"</li>
          <li>Managing a team of brilliant analysts (they're the real MVPs)</li>
          <li>Juggling multiple high-priority projects without dropping the ball</li>
        </ul>
        
        <h4 className="text-xl font-semibold">Tech I Love</h4>
        <p className="text-lg">I'm fluent in the language of data, which means I'm fantastic with:</p>
        <ul className="list-disc list-inside text-lg">
          <li>SQL (MySQL, PostgreSQL, you name it)</li>
          <li>Tableau (I'm basically a Tableau whisperer)</li>
          <li>Python (for when I need to get my code on)</li>
          <li>AWS and Redshift (because cloud is where it's at)</li>
          <li>And a bunch of other tools like Alteryx, PowerBI, and of course Excel</li>
        </ul>
        
        <h4 className="text-xl font-semibold">Beyond the Data</h4>
        <p className="text-lg">When I'm not geeking out over data, you can find me:</p>
        <ul className="list-disc list-inside text-lg">
          <li>Sharing my wisdom as a Business Analytics Advisory Board Member for my alma mater, UMKC</li>
          <li>Leading the charge as Team Captain for the Head for the Cure fundraiser/5k (been doing it since 2016!)</li>
          <li>Probably thinking about my next data project, let's be honest</li>
        </ul>
        
        <h4 className="text-xl font-semibold">Let's Connect!</h4>
        <p className="text-lg">Got a data problem? Need someone to nerd out with over the latest BI tools? Or just want to chat about the best BBQ spots in KC? Hit me up! I'm always down for a good conversation, especially if it involves dashboards or datasets.</p>
        <p className="text-lg">Find me on <a href="https://www.linkedin.com/in/joseph-rasmussen/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a> or shoot me an email at <a href="mailto:joseph.m.rasmussen@gmail.com" className="text-blue-600 hover:underline">joseph.m.rasmussen@gmail.com</a>. Let's make some data magic happen!</p>
      </div>
    </section>
  );
}

export default About;