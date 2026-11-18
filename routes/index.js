// Import Express framework and initialize router
var express = require('express');
var router = express.Router();

// Project Data Array (shared between routes to supply project information)
const projects = [
  { 
    id: 'python-games',
    name: 'Python Games', 
    desc: 'Advanced Python-based games featuring custom logic and OOP mechanics.',  
    detail: 'This project involved developing interactive games using Python. I focused on Object-Oriented Programming (OOP) to manage game states, character logic, and custom physics engines. It served as a primary project for my Intro to Programming and OOP courses.',
    img: '/images/python_game.png' 
  },
  { 
    id: 'cisco-networking',
    name: 'Cisco Network Topologies', 
    desc: 'Complex network configurations designed in Cisco Packet Tracer.', 
    detail: 'During Networking 1 & 2, I configured various network topologies using Cisco Packet Tracer. This included setting up VLANs, OSPF routing, and DHCP servers to simulate real-world enterprise network infrastructures.',
    img: '/images/cisco.png' 
  },
  { 
    id: 'static-portfolio',
    name: 'Static Portfolio (v1)', 
    desc: 'Assignment 1 for Web Scripting using the "A House of Bees 1" palette.', 
    detail: 'My first major web project focused on responsive design and custom CSS. I implemented the "A House of Bees 1" color palette to create a unique, professional brand identity while ensuring cross-device compatibility.',
    img: '/images/portfolio_v1.png' 
  }
];

// GET Home Page route: renders index.ejs view template with page data
router.get('/', (req, res) => {
  res.render('index', { title: 'Kyron Magbujos', message: 'FBIT Student majoring in Information Technology Security' });
});

// GET About Page route: renders about.ejs view template
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

// GET Main Projects Page route: renders projects.ejs and passes the projectList array
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects', projectList: projects });
});

// GET Dynamic Project Detail Route: matches request parameter :id to display specific project details
router.get('/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (project) {
    res.render('project-detail', { title: project.name, project: project });
  } else {
    res.redirect('/projects');
  }
});

// GET Contact Page route: renders contact.ejs view template
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

// Export router for use in main app.js entry file
module.exports = router;
