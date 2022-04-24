// Header On Scroll
const sections = document.querySelectorAll("section");
const navigation = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);

  // scrollNav(sections, navigation);
  // sections.forEach((s) => {
  //   const sectionTop = s.offsetTop;
  //   if (scrollY >= sectionTop - 60) {
  //     console.log(s.getAttribute("id"));
  //   }
  // });
  // console.log(scrollY);
});

// Humberger Menu
const navLink = document.getElementById("primary-navigation");
const btnToggle = document.querySelector(".nav-toggle");

btnToggle.addEventListener("click", () => {
  const visibility = navLink.getAttribute("data-visible");

  if (visibility === "false") {
    navLink.setAttribute("data-visible", true);
    btnToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navLink.setAttribute("data-visible", false);
    btnToggle.setAttribute("aria-expanded", false);
  }
});

// Scroll Navbar
// const scrollNav = function (sections, navigations) {
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (pageYOffset >= sectionTop - 60) {
//       current = section.getAttribute("id");
//     }
//   });

//   navigations.forEach((n) => {
//     n.classList.remove("active");
//     if (!n.classList.contains("active")) {
//       n.classList.add("active");
//     }
//   });
// };
