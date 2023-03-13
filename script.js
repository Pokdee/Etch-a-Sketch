const boDy = document.getElementsByTagName("body")[0];
const container = document.createElement("div");
const inputPix = document.querySelector(".pixel");
const inputVal = document.querySelector(".pixelOut");
const colorIn = document.querySelector('[id = "colors"]');

///
container.classList.add("container");

///
boDy.appendChild(container);

//add original grids
for (let i = 0; i < 256; i++) {
  const box = document.createElement("div");
  box.classList.add(`box`);

  container.appendChild(box);
}
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(16,1fr)";
container.style.gridTemplateRows = "repeat(16,1fr)";

// the drawing part

const pen = function (e, color) {
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = `${color}`;
  }
};

const drawIng = function (color = "black") {
  let isClick;

  container.addEventListener("mousedown", (e) => {
    isClick = true;
    pen(e, color);
  });
  container.addEventListener("mouseup", () => {
    isClick = false;
  });

  container.addEventListener("mousemove", (e) => {
    if (isClick) {
      pen(e, color);
    }
  });
};
drawIng();

// new Grid Control

const divMaker = function (nums) {
  const newGrid = nums * nums;

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < newGrid; i++) {
    const box = document.createElement("div");
    box.classList.add(`box`);

    container.appendChild(box);
  }
  container.style.gridTemplateColumns = `repeat(${nums},1fr)`;
  container.style.gridTemplateRows = `repeat(${nums},1fr)`;
};
inputPix.addEventListener("input", () => {
  const value = inputPix.value;
  inputVal.textContent = value;
  divMaker(value);
});
////

//Color Picker

colorIn.addEventListener("input", () => {
  const value = colorIn.value;
  drawIng(value);
});
