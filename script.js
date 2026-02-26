/* ============================================================
   PORTFOLIO DATA — edit this section to customize the site
   ============================================================ */

const DATA = {
  name: "Garden of Steel",
  tagline: "We create whatever we want with a geniune passion for video games",

  // ── Add / remove projects here ──────────────────────────────
  projects: [
    {
      title: "Forward Hall",
      description: "An upcomming FPS Rougelite with unique gameplay mechanics and an interesting art style",
      backgroundImage: "images/watergif.gif",
      textImage: "images/forwardhall_text.png",
    },
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

// Projects
const grid = document.getElementById("projects-grid");
DATA.projects.forEach(({ title, description, backgroundImage, textImage }) => {
  const card = document.createElement("article");
  card.className = "card";
  card.style.backgroundImage = `url('${backgroundImage}')`;

  const textImageElement = document.createElement("img");
  textImageElement.src = textImage;
  textImageElement.alt = title;
  textImageElement.className = "card-text-image";

  const content = document.createElement("div");
  content.className = "card-content";

  const p = document.createElement("p");
  p.textContent = description;

  content.appendChild(p);
  card.append(textImageElement, content);
  grid.appendChild(card);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar scroll shadow
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 20);
});
