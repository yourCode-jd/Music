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
  duration: 2,
  ease: "power3.out",
  delay: 0.6,
});

gsap.from("#menu-btn", {
  opacity: 0,
  y: 30,
  duration: 3,
  ease: "power3.out",
  delay: 1.5,
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
    x: 120,
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
    "-=0.4"
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
    start: "top 40%", // When 80% into viewport
    toggleActions: "play none none none",
  },
});

// ===== genre-card section ===== //

gsap.registerPlugin(ScrollTrigger);

gsap.from(".genre-card", {
  scrollTrigger: {
    trigger: "#genres",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  scale: 1,
  rotateY: 15,
  duration: 1.2,
  stagger: 0.25,
  ease: "back.out(1.7)",
});

// ===== artist section ===== //

gsap.registerPlugin(ScrollTrigger);

gsap.from(".artist-card", {
  scrollTrigger: {
    trigger: "#trending",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  scale: 0,
  rotate: 10,
  filter: "blur(8px)",
  duration: 1,
  stagger: 0.25,
  ease: "elastic.out(1, 0.5)",
  onUpdate: function () {
    gsap.set(".artist-card", { filter: "blur(0px)" });
  },
});

// ===== Testimonials section ===== //

gsap.registerPlugin(ScrollTrigger);

gsap.from("#testimonials .testimonial-wrapper", {
  scrollTrigger: {
    trigger: "#testimonials",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
});

const testimonials = document.querySelectorAll(".testimonial");
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((el, i) => {
    if (i === index) {
      gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    } else {
      gsap.to(el, {
        autoAlpha: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.in",
      });
    }
  });
}

showTestimonial(currentIndex);

document.getElementById("nextTestimonial").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

document.getElementById("prevTestimonial").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

// ===== Newsletter section ===== //

gsap.registerPlugin(ScrollTrigger);

const newsletterTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#newsletter",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

newsletterTimeline
  .from("#newsletter h2", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })
  .from(
    "#newsletter p",
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.6"
  )
  .from(
    "#newsletter form",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.5"
  );
