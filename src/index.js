import { home } from "./homepage.js";
import { contactTab } from "./contact.js";
import { menuTab } from "./menu.js";

home();
const contactBtn = document.querySelector("#contact-btn");
const menuBtn = document.querySelector("#menu-btn");
const homeBtn = document.querySelector("#home-btn");
homeBtn.classList.add("active");
menuBtn.classList.remove("active");
contactBtn.classList.remove("active");
contactBtn.addEventListener("click", contactTab);
menuBtn.addEventListener("click", menuTab);
homeBtn.addEventListener("click", function() {
  homeBtn.classList.add("active");
  menuBtn.classList.remove("active");
  contactBtn.classList.remove("active");
  const tabContent = document.querySelector(".tab-content");
  tabContent.innerHTML = "";
  tabContent.innerHTML =
    "<h3>This is the home page</h3>   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fugit laudantium, impedit enim ipsa odio explicabo officiis eius laborum voluptas.</p>";
  content.appendChild(tabContent);
});
