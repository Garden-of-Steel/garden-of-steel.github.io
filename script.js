/* ============================================================
   PORTFOLIO DATA — edit this section to customize the site
   ============================================================ */

const DATA = {
  name: "Garden of Steel",
  tagline: "Developer · Creator · Builder",

  about: `Welcome to my portfolio! I'm passionate about building clean,
efficient, and user-friendly software. Feel free to explore my
projects and get in touch.`,

  // ── Add / remove projects here ──────────────────────────────
  projects: [
    {
      title: "Project One",
      description: "A short description of what this project does and the problem it solves.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "Project Two",
      description: "Another project showcase. Replace with real details and a live link.",
      tags: ["Python", "API"],
      link: "#",
    },
    {
      title: "Project Three",
      description: "Yet another project. Keep adding objects to this array to expand.",
      tags: ["React", "Node.js"],
      link: "#",
    },
  ],

  // ── Add / remove skills here ─────────────────────────────────
  skills: [
    "JavaScript", "TypeScript", "HTML & CSS",
    "React", "Node.js", "Python",
    "Git", "SQL", "REST APIs",
  ],

  // ── Add / remove contact links here ──────────────────────────
  contact: [
    { label: "GitHub",   href: "https://github.com/Garden-of-Steel" },
    { label: "Email",    href: "mailto:hello@example.com" },
  ],
};

/* ============================================================
   RENDERING — no need to edit below unless adding new sections
   ============================================================ */

// Hero
document.getElementById("hero-name").textContent    = DATA.name;
document.getElementById("hero-tagline").textContent = DATA.tagline;
document.querySelector(".nav-logo").textContent     = DATA.name;
document.title = `${DATA.name} — Portfolio`;

// About
document.getElementById("about-text").textContent = DATA.about;

// Projects
const grid = document.getElementById("projects-grid");
DATA.projects.forEach(({ title, description, tags, link }) => {
  const card = document.createElement("article");
  card.className = "card";

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = description;

  const tagsDiv = document.createElement("div");
  tagsDiv.className = "card-tags";
  tags.forEach(t => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    tagsDiv.appendChild(span);
  });

  const a = document.createElement("a");
  a.className = "card-link";
  a.href = link;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = "View Project →";

  card.append(h3, p, tagsDiv, a);
  grid.appendChild(card);
});

// Skills
const skillsList = document.getElementById("skills-list");
DATA.skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Contact
const contactList = document.getElementById("contact-links");
DATA.contact.forEach(({ label, href }) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = href;
  a.textContent = label;
  li.appendChild(a);
  contactList.appendChild(li);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar scroll shadow
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 20);
});
