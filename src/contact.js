import img from './images/restaurant_background.jpeg';

function contactPage() {
    const contentDiv = document.querySelector("#content");
    const bg_img = document.createElement("img");
    bg_img.classList.add("home-bg-img");
    bg_img.src = img;
    const home_txt = document.createElement("div");
    home_txt.classList.add("home-text");
    home_txt.innerHTML = `
        <div class="text-content">
            <h1 class="quote-line">Chef’s Table Inquiries</h1>
            <p>
                The Chef requests that all correspondence be submitted in writing.<br>
                Include your name, your party size, and the nature of your appetite.<br>
                Our staff will determine whether you are suited for the experience.<br>
            </p>
            <p>
                Please write to:
            </p>
            <address>
                Hawthorn Dining Estate<br>
                Attn: Guest Relations, The Chef’s Table<br>
                17 Tidefall Road<br>
                Little Harren Isle, North Atlantic 88204
            </address>
        </div > `
    contentDiv.appendChild(bg_img);
    contentDiv.appendChild(home_txt);
}

export { contactPage };