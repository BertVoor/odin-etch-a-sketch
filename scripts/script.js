console.log("script loaded");


const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
};

const pixels = document.querySelectorAll(".grid");
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", (e) => {
        e.target.classList.add("coloured");
    })
});