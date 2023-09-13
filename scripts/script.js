console.log("script loaded");

const playGrid = document.querySelector("#playGrid");

for (let i = 0; i < 256; i++) {
	const div = document.createElement("div");
	div.classList.add("grid");
	playGrid.appendChild(div);
}

const pixels = document.querySelectorAll(".grid");
pixels.forEach((pixel) => {
	pixel.addEventListener("mouseover", (e) => {
		e.target.classList.add("coloured");
	});
});

const resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", () => {
	pixels.forEach((pixel) => {
		pixel.classList.remove("coloured");
	});
});
