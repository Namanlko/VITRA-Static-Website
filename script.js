(function () {
  "use strict";

  // ----- MOBILE MENU TOGGLE (clean) -----
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navLinks.classList.toggle("mobile-open");
    });

    // close on any nav link click (for mobile)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 1024) {
          navLinks.classList.remove("mobile-open");
        }
      });
    });
  }

  // ----- ACTIVE NAVIGATION HIGHLIGHT (on scroll) -----
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  function updateActiveLink() {
    let scrollY = window.scrollY;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionBottom = sectionTop + section.offsetHeight;
      const id = section.getAttribute("id");
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        navItems.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // initial

  // ----- SCHEDULE GRID — dynamic injection (aesthetic consistency) -----
  const scheduleGrid = document.getElementById("scheduleGrid");
  if (scheduleGrid) {
    const classes = [
      {
        day: "MON",
        name: "IRON ASCEND",
        time: "06:30 — 08:00",
        trainer: "Kai Zen",
      },
      {
        day: "TUE",
        name: "HYROX PUSH",
        time: "07:00 — 08:15",
        trainer: "Maya Riviera",
      },
      {
        day: "WED",
        name: "STRIKE & FLOW",
        time: "18:00 — 19:30",
        trainer: "Darius Thorne",
      },
      {
        day: "THU",
        name: "RAW LIFT",
        time: "16:30 — 18:00",
        trainer: "Kai Zen",
      },
      {
        day: "FRI",
        name: "CORE SCULPT",
        time: "09:00 — 10:00",
        trainer: "Elena Voss",
      },
      {
        day: "SAT",
        name: "OPEN GRIND",
        time: "10:00 — 12:00",
        trainer: "All coaches",
      },
      {
        day: "SUN",
        name: "RECOVERY LAB",
        time: "11:00 — 12:30",
        trainer: "Maya Riviera",
      },
    ];
    // take first 4 for grid (layout shows 4, but we can show 4 strong)
    let html = "";
    classes.slice(0, 4).forEach((c) => {
      html += `<div class="class-item">
                                <div class="class-day">${c.day}</div>
                                <div class="class-name">${c.name}</div>
                                <div class="class-time"><i class="far fa-clock" style="color: #d8b45e;"></i> ${c.time}</div>
                                <div class="class-trainer"><i class="fas fa-user"></i> ${c.trainer}</div>
                            </div>`;
    });
    scheduleGrid.innerHTML = html;
  }

  // ----- minimal member counter — animate on load (add dynamic feel) -----
  const memberEl = document.getElementById("memberCount");
  if (memberEl) {
    const target = 2400; // 2.4K visual
    let current = 2240;
    function animateCounter() {
      if (current < target) {
        current += 8;
        memberEl.innerText = (current / 1000).toFixed(1) + "K";
        requestAnimationFrame(animateCounter);
      } else {
        memberEl.innerText = "2.4K";
      }
    }
    // start animation after small delay
    setTimeout(() => {
      animateCounter();
    }, 300);
  }

  // Hover interaction for stats (tiny micro interaction)
  const statItems = document.querySelectorAll(".stat-item h3");
  statItems.forEach((el) => {
    el.addEventListener("mouseenter", function () {
      this.style.color = "#ffffff";
    });
    el.addEventListener("mouseleave", function () {
      this.style.color = "#d8b45e";
    });
  });
})();

(function secondaryEffects() {
  const heroImgDiv = document.querySelector(".hero-image");
  if (heroImgDiv) {
    heroImgDiv.addEventListener("mouseenter", () => {
      heroImgDiv.style.transition = "box-shadow 0.25s";
      heroImgDiv.style.boxShadow = "-20px 20px 0 #ffffff";
    });
    heroImgDiv.addEventListener("mouseleave", () => {
      heroImgDiv.style.boxShadow = "-20px 20px 0 #d8b45e";
    });
  }
})();
