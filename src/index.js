import "./styles.css";
import { homePage } from "./homepage";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

homePage();

function clearContent () {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
}

const homeButton = document.getElementById("home-btn");
homeButton.addEventListener("click", () => {
    clearContent();
    homePage();
})

const menuButton = document.getElementById("menu-btn");
menuButton.addEventListener("click", () => {
    clearContent();
    menuPage();
})

const contactButton = document.getElementById("contact-btn");
contactButton.addEventListener("click", () => {
    clearContent();
    contactPage();
})