const contactTab = () => {
  const contactBtn = document.querySelector("#contact-btn");
  const menuBtn = document.querySelector("#menu-btn");
  const homeBtn = document.querySelector("#home-btn");
  homeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  contactBtn.classList.add("active");
  const tabContent = document.querySelector(".tab-content");
  tabContent.innerHTML = "";
  tabContent.innerHTML =
    "<h3>Contact us:</h3>   <p>Phone: 123 - 456 - 789</p> <p>Email: korean-restaurant@gmail.com</p>";
  content.appendChild(tabContent);
};

export { contactTab };
