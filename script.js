/* ============================================================
   PORTFOLIO DATA — edit this section to customize the site
   ============================================================ */

const DATA = {
  name: "Garden of Steel",
  tagline: "",

  // ── Parallax layers — edit this to add/remove parallax backgrounds ──
  parallaxLayers: [
    {
      image: "images/parallax-bg/sky.png",
      speed: 0.0,
      opacity: 1,
      gradient: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))"
    },
    {
      image: "images/parallax-bg/5.png",
      speed: 0.001,
      opacity: 1,
      gradient: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))"
    },
    {
      image: "images/parallax-bg/4.png", 
      speed: 0.03,
      opacity: 1.0,
      gradient: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))"
    },
    {
      image: "images/parallax-bg/3.png",
      speed: 0.05,
      opacity: 1.0,
      gradient: "linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2))"
    },
    {
      image: "images/parallax-bg/2.png",
      speed: 0.09,
      opacity: 1.0,
      gradient: "linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2))"
    },
    {
      image: "images/parallax-bg/1.png",
      speed: 0.1,
      opacity: 1.0,
      gradient: "linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2))"
    }
    // Add more layers here as needed:
    // {
    //   image: "images/your-image.png",
    //   speed: 0.6,  // 0 = no movement, 1 = moves with scroll
    //   opacity: 0.8,
    //   gradient: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))"
    // }
  ],

  // ── Add / remove projects here ──────────────────────────────
  projects: [
    {
      title: "Forward Hall",
      buttonText: "Learn More",
      buttonLink: "https://www.youtube.com/@Elliptical521",
      backgroundImage: "videos/teaser2.mp4",
      textImage: "images/forwardhall_text.png",
    },
  ],
};

const parallaxScaleFactor = 0.9;

/* ============================================================
   RENDERING — no need to edit below unless adding new sections
   ============================================================ */

// Initialize parallax layers
function initParallax() {
  const heroSection = document.getElementById('hero');
  const heroContent = document.querySelector('.hero-content');
  
  // Create parallax layers dynamically
  DATA.parallaxLayers.forEach((layer, index) => {
    const layerDiv = document.createElement('div');
    layerDiv.className = 'parallax-layer';
    layerDiv.dataset.speed = layer.speed;
    layerDiv.style.backgroundImage = `url('${layer.image}')`;
    layerDiv.style.backgroundPosition = 'center center';
    layerDiv.style.left = '-10%';
    layerDiv.style.top = '0%';
    layerDiv.style.opacity = layer.opacity;
    layerDiv.style.zIndex = index + 1;
    layerDiv.style.transform = `scale(${parallaxScaleFactor})`;
    // Insert before hero content
    heroSection.insertBefore(layerDiv, heroContent);
  });
}

// Hero
initParallax();
document.getElementById("hero-tagline").textContent = DATA.tagline;
document.querySelector(".nav-logo").textContent     = DATA.name;
document.title = `${DATA.name} — Portfolio`;

// Projects
const grid = document.getElementById("projects-grid");
DATA.projects.forEach(({ title, buttonText, buttonLink, backgroundImage, textImage }) => {
  const card = document.createElement("article");
  card.className = "card";
  
  // Check if background is a video file
  const isVideo = /\.(mp4|webm|ogg)$/i.test(backgroundImage);
  
  if (isVideo) {
    
    // Create video background
    const video = document.createElement("video");
    video.className = "card-video";
    document.documentElement.style.setProperty('--blur-amount', window.pageYOffset);
    video.src = backgroundImage;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.style.position = "absolute";
    video.style.top = "0";
    video.style.left = "0";
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.transform = "scale(1)";
    video.style.zIndex = "0";
    card.appendChild(video);
    card.style.position = "relative";
  } else {
    // Use image background
    card.style.backgroundImage = `url('${backgroundImage}')`;
  }

  const textImageElement = document.createElement("img");
  textImageElement.src = textImage;
  textImageElement.alt = title;
  textImageElement.className = "card-text-image";

  const content = document.createElement("div");
  content.className = "card-content";

  const button = document.createElement("a");
  button.href = buttonLink;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.textContent = buttonText;
  button.className = "card-button";

  content.appendChild(button);
  card.append(textImageElement, content);
  grid.appendChild(card);
});

function updateVideos() {
  // Get all project cards
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    // Find video element within this card
    const video = card.querySelector('video');
    
    if (video) {
      // Update video properties here
      // Example: Apply blur based on scroll position
      const blurAmount = (10-(window.pageYOffset / 90));
      const blurClamped = Math.max(2, Math.min(blurAmount, 30)); // Clamps blurAmount 3-30
      video.style.filter = `blur(${blurClamped}px)`;
      
      // Or update scale, opacity, etc.
      // video.style.opacity = Math.max(1 - window.pageYOffset / 1000, 0.3);
      // video.style.transform = `scale(${0.7 - window.pageYOffset / 10000})`;
    }
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar scroll shadow
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 20);
});

// Parallax effect
function updateParallax() {
  const scrolled = window.pageYOffset;
  const heroHeight = document.getElementById('hero').offsetHeight;
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  
  // Only apply parallax when the hero section is visible
  if (scrolled < heroHeight) {
    parallaxLayers.forEach(layer => {
      const speed = layer.dataset.speed;
      const yPos = -(scrolled * speed);
      layer.style.transform = `translateY(${yPos}px) scale(${parallaxScaleFactor})`;
    });
  }
}

// Throttle parallax updates for better performance
let ticking = false;
function requestParallaxUpdate() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    requestAnimationFrame(updateVideos);
    ticking = true;
    setTimeout(() => { ticking = false; }, 10);
  }
}

window.addEventListener('scroll', requestParallaxUpdate);
window.addEventListener('resize', updateParallax);
