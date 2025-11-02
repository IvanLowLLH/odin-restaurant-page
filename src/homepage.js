import img from './images/restaurant_background.jpeg';

function homePage() {
    const contentDiv = document.querySelector("#content");
    const bg_img = document.createElement("img");
    bg_img.classList.add("home-bg-img");
    bg_img.src = img;
    const home_txt = document.createElement("div");
    home_txt.classList.add("home-text");
    home_txt.innerHTML = `
        <div class="text-content">
            <h2 class="quote-line" > We don’t serve food</h2 >
            <h3 class="quote-line">We serve meaning</h3>
            <p>At Hawthorn, dining is an act of surrender. Our seasonal menu unfolds as a story — intimate, exacting, and absolute.
                Every plate is composed with intent, every moment designed to expose truth. You do not simply eat here. You are
                consumed.</p>
        </div > `
    contentDiv.appendChild(bg_img);
    contentDiv.appendChild(home_txt);
}

export {homePage};