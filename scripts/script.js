console.log("script loaded");

const head = document.querySelector("head");
const playGrid = document.querySelector("#playGrid");
const sizeButton = document.querySelector("#sizeButton");
const resetButton = document.querySelector("#resetButton");
let gridSize = 10;

const styleElement = document.createElement("style");
styleElement.id = "flexStyle";
head.appendChild(styleElement);

drawGrid();

sizeButton.addEventListener("click", () => {
	gridSize = Number(prompt("Please set the number of squares per side:"));
	drawGrid();
});

function drawGrid() {
	const existingPixels = document.querySelectorAll(".pixel");
	existingPixels.forEach((pixel) => {
		pixel.remove();
	});

	for (let i = 0; i < gridSize * gridSize; i++) {
		const div = document.createElement("div");
		div.classList.add("pixel");
		playGrid.appendChild(div);
	}
	setFlexStyle();
	setMouseover();
}

function setFlexStyle() {
	const flexStyle = document.querySelector("#flexStyle");
	flexStyle.innerHTML = `.pixel {flex: 1 1 ${100 / gridSize}%}`;
}

function setMouseover() {
	document.querySelectorAll(".pixel").forEach((pixel) => {
		pixel.addEventListener("mouseover", (e) => {
			e.target.classList.add("coloured");
		});
	});
}

resetButton.addEventListener("click", () => {
	document.querySelectorAll(".pixel").forEach((pixel) => {
		pixel.classList.remove("coloured");
	});
});
