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

    if (cardAngle > 90 && cardAngle < 270) {
      card.style.opacity = "1";
      card.style.pointerEvents = "auto";

      transform += " rotateY(180deg)";
      scale = 1;

      // ⭐ edge cards bigger
      if (
        (cardAngle > 90 && cardAngle < 120) ||
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

const isMobile = window.innerWidth <= 568;

if (isMobile) {
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

      if (cardAngle > 90 && cardAngle < 270) {
        card.style.opacity = "1";
        card.style.pointerEvents = "auto";

        transform += " rotateY(180deg)";
        scale = 1;

        // ⭐ edge cards bigger
        if (
          (cardAngle > 90 && cardAngle < 120) ||
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
