import cheese_burg_img from './images/cheeseburger.jpeg';
import lemon_caviar_img from './images/lemon_caviar.jpeg';
import tortillas_img from './images/tortillas.jpeg';
import island_img from './images/island.jpeg';

function menuPage() {
    const contentDiv = document.querySelector("#content");
    contentDiv.classList.add("menu-page");
    const sub_title = document.createElement("h1");
    sub_title.classList.add("quote-line");
    sub_title.textContent = "Menu";

    const menu_grid = document.createElement("div");
    menu_grid.classList.add("menu-grid");

    const menu_items_list = ["The Island", "Lemon Caviar", "Tortillas", "Cheesburger"];
    const menu_items_img_list = [island_img, lemon_caviar_img, tortillas_img, cheese_burg_img];
    for (let i = 0; i < menu_items_list.length; i++) {
        const menu_card = document.createElement("div");
        menu_card.classList.add("menu-card");
        const menu_item_img = document.createElement("img");
        menu_item_img.classList.add("menu-image");
        menu_item_img.src = menu_items_img_list[i];
        const menu_item_title = document.createElement("p");
        menu_item_title.classList.add("menu-item-title");
        menu_item_title.textContent = menu_items_list[i];
        
        menu_card.appendChild(menu_item_img);
        menu_card.appendChild(menu_item_title);
        menu_grid.appendChild(menu_card);
    }
    contentDiv.appendChild(sub_title);
    contentDiv.appendChild(menu_grid);
}

export { menuPage };