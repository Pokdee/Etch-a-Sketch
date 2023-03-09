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

const divMaker = function (nums) {
  console.log(nums);
  while (container.firstChild) {
    container.removeChild(container.children[0]);
  }
  //   console.log(container.hasChildNodes());
  for (let i = 0; i < nums; i++) {
    const box = document.createElement("div");
    box.classList.add(`box-${i + 1}`);

    container.appendChild(box);
  }
};

const tracker = function (e) {
  if (e.target.classList.contains("box")) {
    console.log("yes");
    e.target.style.backgroundColor = "blue";
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
// window.addEventListener("mouseover", (e) => tracker(e));

window.addEventListener("click", () => clicker());
