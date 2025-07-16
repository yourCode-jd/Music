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
      color: "#1e2376", // optional: purple on hover
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
