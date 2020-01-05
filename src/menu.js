const menuTab = () => {
  const contactBtn = document.querySelector("#contact-btn");
  const menuBtn = document.querySelector("#menu-btn");
  const homeBtn = document.querySelector("#home-btn");
  homeBtn.classList.remove("active");
  menuBtn.classList.add("active");
  contactBtn.classList.remove("active");
  const tabContent = document.querySelector(".tab-content");
  tabContent.innerHTML = "";
  tabContent.innerHTML =
    "<h3>Menu:</h3>   <p>Bibimbap.......6€</p> <p>Bulgogi.........7€</p>";
  content.appendChild(tabContent);
};

export { menuTab };
