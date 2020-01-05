import { contactTab } from "./contact";
import { menuTab } from "./menu";

function home() {
  const h1 = document.createElement("h1");
  h1.innerHTML = "<h1>Korean Restaurant</h1>";

  const p = document.createElement("p");
  p.innerHTML = "<p>Welcome to the best Korean restaurant in the world</p>";

  const content = document.querySelector("#content");
  content.appendChild(h1);
  content.appendChild(p);

  const nav = document.createElement("ul");
  nav.innerHTML =
    "<button id='home-btn' >Home</button><button id='menu-btn' >Menu</button><button id='contact-btn'>Contact</button>";
  content.appendChild(nav);

  const tabContent = document.createElement("div");
  tabContent.classList.add("tab-content");
  tabContent.innerHTML =
    "<h3>This is the home page</h3>   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fugit laudantium, impedit enim ipsa odio explicabo officiis eius laborum voluptas.</p>";
  content.appendChild(tabContent);
}

export { home };
