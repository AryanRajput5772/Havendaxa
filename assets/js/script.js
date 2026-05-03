window.addEventListener("scroll", function () {
  const navbar = document.getElementById("nav-scroll");
  const actions1 = document.getElementById("actions1");
  const actions2 = document.getElementById("actions2");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");

    if (window.innerWidth >= 568) {
      actions1.classList.add("actions-scrolled");
      actions2.classList.add("actions-scrolled");
    }
  } else {
    navbar.classList.remove("scrolled");
    actions1.classList.remove("actions-scrolled");
    actions2.classList.remove("actions-scrolled");
  }
});
const toggler = document.querySelector(".navbar-toggler");
const menu = document.getElementById("menu");

menu.addEventListener("show.bs.collapse", function () {
  toggler.innerHTML = '<i class="fa-solid fa-xmark"></i>';
});

menu.addEventListener("hide.bs.collapse", function () {
  toggler.innerHTML = '<span class="navbar-toggler-icon"></span>';
});

const dots = document.querySelectorAll(".dot");
let index = 0;

setInterval(() => {
  dots[index].classList.remove("dot-active");

  index = (index + 1) % dots.length;

  dots[index].classList.add("dot-active");
}, 2500);

if (window.innerWidth <= 568) {
  const nameEl = document.getElementById("name");
  const roleEl = document.getElementById("role");
  const descEl = document.getElementById("desc");

  const people = [
    {
      name: "Akhilesh Sharma",
      role: "MD & CEO",
      desc: "We deliver exceptional quality through innovation and expertise. Our solutions make a real impact and drive measurable results.",
    },
    {
      name: "Priyanka Sharma",
      role: "Co-Founder",
      desc: "Building strong teams with passion.",
    },
    {
      name: "Anant Gaur",
      role: "CTO",
      desc: "Driving innovation with modern solutions.",
    },
    {
      name: "Payal Arora",
      role: "Operations Analyst",
      desc: "Contributing to growth and success.",
    },
    {
      name: "Vipul Arora",
      role: "Company Secretary",
      desc: "Ensuring timely delivery and quality.",
    },
    {
      name: "Vishal Sinha",
      role: "Partner",
      desc: "Crafting scalable applications.",
    },
    {
      name: "Sukrati R Ambol",
      role: "CFO",
      desc: "Designing intuitive experiences.",
    },
  ];

  const carousel = document.getElementById("carousel");
  const cards = document.querySelectorAll(".card");
  const total = cards.length;

  const angle = 360 / total;
  const radius = 480;
  let currentAngle = 0;

  function updateCarousel() {
    let closestDiff = 360;
    let activeIndex = 0;
    let centerIndex = 0;

    cards.forEach((card, i) => {
      let cardAngle = (i * angle + currentAngle) % 360;
      if (cardAngle < 0) cardAngle += 360;

      let transform = `rotateY(${i * angle}deg) translateZ(${radius}px)`;
      let scale = 0.6; // ✅ default small

      if (cardAngle >= 120 && cardAngle <= 240) {
        card.style.opacity = "1";
        card.style.pointerEvents = "auto";

        transform += " rotateY(180deg)";
        scale = 1.05;
      } else {
        card.style.opacity = "0";
        card.style.pointerEvents = "none";
      }

      // ✅ apply scale ONCE
      transform += ` scale(${scale})`;

      card.style.transform = transform;
      // center detection (unchanged)
      let diff = Math.abs(cardAngle - 180);
      if (diff < closestDiff) {
        closestDiff = diff;
        activeIndex = i % 7;
        centerIndex = i; // ✅ ADD THIS
      }
    });
    cards.forEach((card, i) => {
      if (i === centerIndex) {
        // 🔥 only modify center card
        let base = card.style.transform.replace(/scale\([^)]+\)/, "");
        card.style.transform = base + ` scale(1)`; // center boost
      }
    });
    // ✅ update text
    const person = people[activeIndex];
    nameEl.textContent = person.name;
    roleEl.textContent = person.role;
    descEl.textContent = person.desc;

    carousel.style.transform = `rotateY(${currentAngle}deg)`;
  }

  /* Auto rotate */
  setInterval(() => {
    currentAngle -= angle;
    updateCarousel();
  }, 2500);

  updateCarousel();
} else {
  const nameEl = document.getElementById("name");
  const roleEl = document.getElementById("role");
  const descEl = document.getElementById("desc");

  const people = [
    {
      name: "Akhilesh Sharma",
      role: "MD & CEO",
      desc: "We deliver exceptional quality through innovation and expertise. Our solutions make a real impact and drive measurable results.",
    },
    {
      name: "Priyanka Sharma",
      role: "Co-Founder",
      desc: "Building strong teams with passion.",
    },
    {
      name: "Anant Gaur",
      role: "CTO",
      desc: "Driving innovation with modern solutions.",
    },
    {
      name: "Payal Arora",
      role: "Operations Analyst",
      desc: "Contributing to growth and success.",
    },
    {
      name: "Vipul Arora",
      role: "Company Secretary",
      desc: "Ensuring timely delivery and quality.",
    },
    {
      name: "Vishal Sinha",
      role: "Partner",
      desc: "Crafting scalable applications.",
    },
    {
      name: "Sukrati R Ambol",
      role: "CFO",
      desc: "Designing intuitive experiences.",
    },
  ];

  const carousel = document.getElementById("carousel");
  const cards = document.querySelectorAll(".card");
  const total = cards.length;

  const angle = 360 / total;
  const radius = 540;
  let currentAngle = 0;

  function updateCarousel() {
    let closestDiff = 360;
    let activeIndex = 0;
    let centerIndex = 0;

    cards.forEach((card, i) => {
      let cardAngle = (i * angle + currentAngle) % 360;
      if (cardAngle < 0) cardAngle += 360;

      let transform = `rotateY(${i * angle}deg) translateZ(${radius}px)`;
      let scale = 0.6; // ✅ default small

      if (cardAngle > 50 && cardAngle < 270) {
        card.style.opacity = "1";
        card.style.pointerEvents = "auto";

        transform += " rotateY(180deg)";
        scale = 1;

        // ⭐ edge cards bigger
        if (
          (cardAngle > 60 && cardAngle < 120) ||
          (cardAngle > 240 && cardAngle < 270)
        ) {
          scale = 1.2; // 🔥 now this will actually work
        } else if (
          (cardAngle >= 120 && cardAngle < 150) ||
          (cardAngle > 210 && cardAngle <= 240)
        ) {
          scale = 1.15;
        } else if (
          (cardAngle >= 150 && cardAngle < 180) ||
          (cardAngle > 180 && cardAngle <= 210)
        ) {
          scale = 1.09;
        }
      } else {
        card.style.opacity = "0";
        card.style.pointerEvents = "none";
      }

      // ✅ apply scale ONCE
      transform += ` scale(${scale})`;

      card.style.transform = transform;
      // center detection (unchanged)
      let diff = Math.abs(cardAngle - 180);
      if (diff < closestDiff) {
        closestDiff = diff;
        activeIndex = i % 7;
        centerIndex = i; // ✅ ADD THIS
      }
    });
    cards.forEach((card, i) => {
      if (i === centerIndex) {
        // 🔥 only modify center card
        let base = card.style.transform.replace(/scale\([^)]+\)/, "");
        card.style.transform = base + ` scale(1.05)`; // center boost
      }
    });
    // ✅ update text
    const person = people[activeIndex];
    nameEl.textContent = person.name;
    roleEl.textContent = person.role;
    descEl.textContent = person.desc;

    carousel.style.transform = `rotateY(${currentAngle}deg)`;
  }

  /* Auto rotate */
  setInterval(() => {
    currentAngle -= angle;
    updateCarousel();
  }, 2500);

  updateCarousel();
}
// Replace your current resize listener with this
let lastWidth = window.innerWidth;

window.addEventListener("resize", () => {
  const newWidth = window.innerWidth;
  if (newWidth !== lastWidth) {
    // only reload on width change, not height
    lastWidth = newWidth;
    location.reload();
  }
});

function playVideo() {
  const infoBox = document.getElementById("info-box");
  infoBox.style.marginTop = "40px";
  const container = document.getElementById("videoContainer");

  container.innerHTML = `
         <iframe
         class="video-frame"
        width="100%"
        
        src="https://www.youtube.com/embed/tvYAidNdPMs?autoplay=1&start=5&playsinline=1"
        title="YouTube video player"
        frameborder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen>
      </iframe>
        `;
}

// -----------------------------------------------------------------------------------
function toggleCard(selectedCard) {
  const cards = document.querySelectorAll(".card-custom");
  const cols = document.querySelectorAll(".card-col");

  cards.forEach((card) => {
    if (card !== selectedCard) {
      card.classList.remove("active");
      const activeContent = card.querySelector(".card-content");

      activeContent.classList.remove("active-card-content");

      if (window.innerWidth > 568) {
        const mainCrdLastDiv = card.querySelector(".main-card");
        if (mainCrdLastDiv) {
          mainCrdLastDiv.style.display = "block";

          const mainCardBtn = mainCrdLastDiv.querySelector(".main-card-btn");
          mainCardBtn.style.width = "50%";
          mainCardBtn.style.marginLeft = "50px";

          const mainCardDesc = mainCrdLastDiv.querySelector(".main-card-desc");
          mainCardDesc.style.width = "100%";
        }
      }
    }
  });

  selectedCard.classList.add("active");

  const activeContent = selectedCard.querySelector(".card-content");

  activeContent.classList.add("active-card-content");
  if (window.innerWidth > 568) {
    const mainCrdLastDiv = selectedCard.querySelector(".main-card");
    if (mainCrdLastDiv) {
      mainCrdLastDiv.style.display = "flex";
      const mainCardBtn = mainCrdLastDiv.querySelector(".main-card-btn");
      mainCardBtn.style.width = "22%";
      mainCardBtn.style.marginLeft = "0px";

      const mainCardDesc = mainCrdLastDiv.querySelector(".main-card-desc");
      mainCardDesc.style.width = "70%";
    }
  }

  cols.forEach((col) => {
    col.classList.remove("active-col");
    col.classList.add("inactive-col");
  });

  const parentCol = selectedCard.closest(".card-col");

  parentCol.classList.add("active-col");
  parentCol.classList.remove("inactive-col");
}
// -------------------------------------------------------------------------------------------------
// Store all images in an array
const images = [
  "./assets/images/Card_img.png",
  "./assets/images/Card_img.png",
  "./assets/images/Card_img.png",
  "./assets/images/Card_img.png",
  "./assets/images/Card_img.png",
];

let currentIndex = 0;
let isAnimating = false;

const cards = document.querySelectorAll(".proj-card");
const phoneContainer = document.querySelector(".hero-image");

// Get all containers in order: far-left, near-left, phone, near-right, far-right
const containers = [cards[0], cards[1], phoneContainer, cards[2], cards[3]];

function getSrcs(index) {
  const total = images.length;
  return [
    images[(index - 2 + total) % total],
    images[(index - 1 + total) % total],
    images[index],
    images[(index + 1) % total],
    images[(index + 2) % total],
  ];
}

function slide() {
  if (isAnimating) return;
  isAnimating = true;

  currentIndex = (currentIndex + 1) % images.length;
  const newSrcs = getSrcs(currentIndex);

  containers.forEach((container, i) => {
    const oldImg = container.querySelector("img");

    // Create new image, place it off-screen to the RIGHT
    const newImg = document.createElement("img");
    newImg.src = newSrcs[i];
    newImg.style.cssText = `
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      object-fit: fill;
      transform: translateX(100%);  /* start off RIGHT */
      transition: none;
      z-index: 2;
    `;
    container.appendChild(newImg);

    // Force paint so browser registers the starting position
    newImg.getBoundingClientRect();

    // Now animate BOTH simultaneously
    const DURATION = "0.6s";
    const EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

    // Old → slides LEFT
    oldImg.style.transition = `transform ${DURATION} ${EASING}`;
    oldImg.style.transform = "translateX(-100%)";

    // New → slides to CENTER from right
    newImg.style.transition = `transform ${DURATION} ${EASING}`;
    newImg.style.transform = "translateX(0%)";
  });

  // Cleanup after animation
  setTimeout(() => {
    containers.forEach((container) => {
      const imgs = container.querySelectorAll("img");
      // Remove old image, keep new one, reset styles
      if (imgs.length > 1) {
        imgs[0].remove();
        imgs[1].style.transition = "none";
        imgs[1].style.transform = "translateX(0%)";
        imgs[1].style.zIndex = "";
      }
    });
    isAnimating = false;
  }, 620); // just over transition duration
}

setInterval(slide, 3000);
