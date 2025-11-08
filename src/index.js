import "./styles.css";
import { homePage } from "./homepage";
import { menuPage } from "./menu";


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