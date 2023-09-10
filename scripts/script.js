console.log("script loaded");


const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    if ((i + 1) % 16 == 0) {
        div.classList.add("x16");
    }
    container.appendChild(div);
    console.log("divs added:" + (i + 1));
};