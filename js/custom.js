// musicbar

gsap.to(".shaking-img", {
  x: 10,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// navbar
const menuBtn = document.getElementById("menu-btn");
const navPopup = document.getElementById("nav-popup");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  if (!isOpen) {
    gsap.to(navPopup, {
      height: "600px",
      duration: 0.5,
      ease: "power2.out",
      onStart: () => {
        navPopup.style.display = "block"; // ensure it's visible
      },
    });
  } else {
    gsap.to(navPopup, {
      height: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        navPopup.style.display = "none"; // hide it after animation
      },
    });
  }
  isOpen = !isOpen;
});

// Smooth scroll for anchor links

const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      duration: 0.4,
      scale: 1.1,
      letterSpacing: "4px",
      color: "#8b7cde", // optional: purple on hover
      ease: "power2.out",
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      duration: 0.4,
      scale: 1,
      letterSpacing: "2px",
      color: "#ffffff", // back to white
      ease: "power2.inOut",
    });
  });
});

// Animate header elements on page load
gsap.from("header a", {
  opacity: 0,
  y: -30,
  duration: 1,
  ease: "power3.out",
  delay: 0.2,
});

gsap.from("#menu-btn", {
  opacity: 0,
  y: -30,
  duration: 1,
  ease: "power3.out",
  delay: 0.4,
});

// Animate hero section on page load

const heroTitle = document.querySelector(".hero-title");
const words = heroTitle.textContent.trim().split(" ");
heroTitle.innerHTML = words
  .map((word) => `<span class="word inline-block">${word}&nbsp;</span>`)
  .join("");

// Step 2: Animate using a GSAP timeline
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

tl.from(
  ".hero-title .word",
  {
    opacity: 0,
    y: 50,
    duration: 2,
    stagger: 0.6,
  },
  0
) // start immediately

  .from(
    ".hero .custom-btn",
    {
      opacity: 0,
      y: 50,
      duration: 0.6,
    },
    "-=0.3"
  ); // starts slightly

// Feature section animation
gsap.registerPlugin(ScrollTrigger);

gsap.from(".track-card", {
  opacity: 0,
  y: 100,
  scale: 0.8,
  duration: 1.5,
  ease: "elastic.out(1, 0.4)", // <- Elastic bounce effect
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#tracks", // ID of the section
    start: "top 10%", // When 80% into viewport
    toggleActions: "play none none none",
  },
});
