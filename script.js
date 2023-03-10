const boDy = document.getElementsByTagName("body")[0];
const container = document.createElement("div");
const btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "Edit number of square per side";
container.classList.add("container");

boDy.appendChild(container);
boDy.prepend(btn);
for (let i = 0; i < 256; i++) {
  const box = document.createElement("div");
  box.classList.add(`box`);

  container.appendChild(box);
}
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(16,1fr)";
container.style.gridTemplateRows = "repeat(16,1fr)";

const divMaker = function (nums) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const newGrid = nums * nums;
  console.log(newGrid);
  for (let i = 0; i < newGrid; i++) {
    const box = document.createElement("div");
    box.classList.add(`box`);

    container.appendChild(box);
  }
  container.style.gridTemplateColumns = `repeat(${nums},1fr)`;
  container.style.gridTemplateRows = `repeat(${nums},1fr)`;
};

const tracker = function (e) {
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = "black";
  }
};

const clicker = function () {
  let num = prompt("Please add number of square not more than 100");
  while (!parseInt(num)) {
    num = prompt("Please add a number");
    num = parseInt(num);
  }
  while (num > 100) {
    num = prompt("Please add number less than 100");
  }
  divMaker(num);
};
window.addEventListener("mouseover", (e) => tracker(e));

btn.addEventListener("click", () => clicker());
