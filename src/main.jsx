import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Terminal, Layers3, ShieldCheck, Database, FlaskConical, Code2, ExternalLink, Menu } from 'lucide-react';
import './style.css';

const projects = [
  {
    number: '01', type: 'BACKEND · IN DEVELOPMENT', title: 'Wallet API',
    description: 'A wallet backend focused on secure identity, account ownership, and reliable persistence.',
    details: ['JWT authentication', 'Spring Security + BCrypt', 'PostgreSQL · JPA', 'JUnit + Mockito'],
    outcome: 'Designed user-to-wallet ownership, unique account numbers, wallet status, and precise monetary balances with BigDecimal.',
    href: 'https://github.com/A-Abdulazeez/Wallet-Api', linkLabel: 'Explore on GitHub', icon: ShieldCheck
  },
  {
    number: '02', type: 'BACKEND · INDEPENDENT PROJECT', title: 'Course Enrollment System',
    description: 'A Java REST API for student accounts and course administration, built around clear rules and role-based access.',
    details: ['Java · Spring Boot', 'Student / admin roles', 'MongoDB', 'JUnit + Mockito'],
    outcome: 'Built layered controller, service, and repository code; enforced RBAC, added DTOs and mappers, validation, and tests for access restrictions and error cases.',
    href: 'https://github.com/A-Abdulazeez/CourseEnrollment-System', linkLabel: 'View repository', icon: Layers3
  },
  {
    number: '03', type: 'BACKEND · EARLIER IMPLEMENTATION', title: 'Course Management API',
    description: 'An earlier Python implementation exploring the same domain through FastAPI and service-level access checks.',
    details: ['Python · FastAPI', 'Authentication', 'Admin access checks', 'Automated tests'],
    outcome: 'Practised API request validation, course operations, and checking both successful requests and failure cases.',
    href: 'https://github.com/Course-Enrollment-System/course-enrollment-system', linkLabel: 'Explore on GitHub', icon: Code2
  },
  {
  number: '04',
  type: 'PERSONAL · REACT / VITE',
  title: 'Developer Portfolio',
  description: 'A personal portfolio built to showcase my software engineering projects, technical skills, and hands on experience in backend and frontend development.',
  details: ['React','JavaScript','Responsive Design','Project Case Studies','GitHub Integration', 'Contact & Social Links'
  ],
  outcome: 'Created a responsive personal website to present my engineering work, highlight project implementations, and make it easy for recruiters and developers to explore my code and connect with me.',
  href: 'https://github.com/a-abdulazeez',
  linkLabel: 'Explore on GitHub',
  icon: Code2
}
];

const skills = [
  { name: 'Backend engineering', items: 'Java · Spring Boot · Python · FastAPI · Node.js · Express' },
  { name: 'API security', items: 'REST APIs · JWT · Spring Security · BCrypt · Role-based access' },
  { name: 'Data & persistence', items: 'PostgreSQL · MySQL · MongoDB · SQL · Spring Data' },
  { name: 'Testing & quality', items: 'JUnit · Mockito · Integration tests · Validation · Postman' },
  { name: 'Frontend', items: 'React · JavaScript · TypeScript · HTML · CSS · Tailwind CSS' },
  { name: 'Tools & workflow', items: 'Git · GitHub · Maven · Gradle · Linux · Swagger · DBeaver' }
];

function App() {
  return <div className="site-shell">
    <header className="topbar">
      <a className="wordmark" href="#home" aria-label="Abdullahi Abdulazeez home"><span className="mark">AA</span><span>ABDULLAHI ABDULAZEEZ<span className="wordmark-sub">SOFTWARE DEVELOPER</span></span></a>
      <nav><a href="#work">Work</a><a href="#approach">Approach</a><a href="#about">About</a><a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={14}/></a></nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className= ""/>OPEN TO OPPORTUNITIES <span className=""/></div>
          <p className="intro">Hi, I’m Abdullahi.</p>
          <h1>I build software<br/>with <em>purpose.</em></h1>
          <p className="hero-summary">Software developer focused on backend engineering, secure APIs, and the details that make applications dependable.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={16}/></a><a className="text-link" href="mailto:abdullahi@abdulazeez.tech">Get in touch <ArrowUpRight size={15}/></a></div>
          <div className="hero-meta"><span><MapPin size={14}/> Lagos, Nigeria</span><span className="meta-divider"/><span><Terminal size={14}/> Java · APIs · Systems</span></div>
        </div>
        <div className="hero-visual">
          <div className="image-frame"><img src="/images/me.jpeg" alt="My Photo"/><span className="image-index"></span></div>
          <div className="visual-note"><span className="note-line"/><span>Curious by nature.<br/>Practical by design.</span></div>
          <span className="orbit orbit-one"/><span className="orbit orbit-two"/>
        </div>
        <a href="#work" className="scroll-cue"><ArrowDownRight size={17}/> SCROLL TO EXPLORE</a>
        <div className="hero-number">01 <span>/ 04</span></div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading"><div><p className="kicker">SELECTED WORK <span>— 2024 / 2026</span></p><h2>Projects built to<br/><em>solve real problems.</em></h2></div><p className="section-intro">I care about how software behaves beyond the happy path: permissions, validation, data integrity, and tests that prove the rules work.</p></div>
        <div className="project-list">{projects.map((project) => { const Icon = project.icon; return <article className="project-row" key={project.number}>
          <div className="project-number">{project.number}</div>
          <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.details.map(item => <span key={item}>{item}</span>)}</div></div>
          <div className="project-aside"><div className="project-icon"><Icon size={21} strokeWidth={1.4}/></div><p>{project.outcome}</p><a href={project.href} target="_blank" rel="noreferrer" className="project-link">{project.linkLabel}<span><ArrowUpRight size={17}/></span></a></div>
        </article>; })}</div>
        <div className="work-footnote"><span className="footnote-mark">*</span><p>Repository links open GitHub. Where an individual repository URL wasn’t provided, the link opens my GitHub profile. Project descriptions reflect work and status stated in my CV.</p><a href="https://github.com/a-abdulazeez" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={14}/></a></div>
      </section>

      <section className="approach-section section-pad" id="approach">
        <div className="section-heading approach-heading"><div><p className="kicker">HOW I WORK <span>— PRINCIPLES</span></p><h2>Good code is more<br/>than code that <em>runs.</em></h2></div><p className="section-intro">I aim for software that is understandable, testable, and straightforward to maintain. No unnecessary complexity — just clear decisions and solid fundamentals.</p></div>
        <div className="principles-grid"><article><span className="principle-no">01 / STRUCTURE</span><h3>Clear boundaries</h3><p>Controllers handle HTTP, services hold business rules, and repositories handle persistence. DTOs and mappers keep API contracts separate from database models.</p></article><article><span className="principle-no">02 / CONFIDENCE</span><h3>Test the behaviour</h3><p>JUnit and Mockito tests cover expected results and rejected operations — including invalid input, duplicate data, and access restrictions.</p></article><article><span className="principle-no">03 / SAFETY</span><h3>Make rules explicit</h3><p>Authentication, authorization, validation, and data constraints work together to protect application behaviour and keep records consistent.</p></article></div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-left"><p className="kicker">A LITTLE ABOUT ME <span>— THE PERSON</span></p><h2>Engineer in<br/>progress. <em>Always.</em></h2><p className="about-copy">My path into software started with a Biochemistry degree and grew into a commitment to building useful technology. Through project-based training and independent work, I’ve been developing my backend skills while keeping an eye on the full application.</p><p className="about-copy">I enjoy breaking a problem down, understanding the rules underneath it, and writing code that makes those rules clear.</p><a href="mailto:abdullahi@abdulazeez.tech" className="text-link about-cta">Have a project in mind? <ArrowUpRight size={15}/></a></div>
        <div className="skills-panel"><div className="skills-top"><span>TECHNICAL TOOLKIT</span><span>01—06</span></div>{skills.map((skill, i) => <div className="skill-row" key={skill.name}><span className="skill-count">0{i+1}</span><div><h3>{skill.name}</h3><p>{skill.items}</p></div></div>)}</div>
      </section>

      <section className="background-strip"><div><p className="kicker">BACKGROUND</p><h3>Different starting point.<br/><em>One clear direction.</em></h3></div><div className="education-item"><span>2026 — 2027</span><h4>Semicolon Africa</h4><p>Software Engineering · Expected February 2027</p></div><div className="education-item"><span>2020 — 2025</span><h4>Ahmadu Bello University</h4><p>BSc Biochemistry</p></div><div className="education-item"><span>PROFESSIONAL DEVELOPMENT</span><h4>Henley Business School</h4><p>Business Management training through Semicolon Africa</p></div></section>

      <section className="contact-section section-pad" id="contact"><div className="contact-copy"><p className="kicker">HAVE SOMETHING IN MIND? <span>— CONTACT</span></p><h2>Let’s make<br/>something <em>useful.</em></h2><p>I’m open to junior software engineering opportunities, internships, and collaborations where I can contribute, learn, and do meaningful work.</p><a className="button button-primary" href="mailto:abdullahi@abdulazeez.tech">Start a conversation <ArrowUpRight size={16}/></a></div><div className="contact-details"><a href="mailto:abdullahi@abdulazeez.tech"><span className="contact-icon"><Mail size={18}/></span><span><small>EMAIL</small>abdullahi@abdulazeez.tech</span><ArrowUpRight size={17}/></a><a href="https://www.linkedin.com/in/abdullahi-abdulazeez-2918593b3" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={18}/></span><span><small>LINKEDIN</small>Connect professionally</span><ArrowUpRight size={17}/></a><a href="https://github.com/a-abdulazeez" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={18}/></span><span><small>GITHUB</small>github.com/a-abdulazeez</span><ArrowUpRight size={17}/></a></div></section>
    </main>
    <footer><a className="wordmark footer-mark" href="#home"><span className="mark">AA</span><span>ABDULLAHI ABDULAZEEZ<span className="wordmark-sub">SOFTWARE DEVELOPER</span></span></a><span className="footer-center">BUILT WITH CARE · LAGOS, NIGERIA</span><span className="copyright">© {new Date().getFullYear()} ABDULLAHI ABDULAZEEZ</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
