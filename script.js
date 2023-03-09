const boDy = document.getElementsByTagName("body")[0];
const container = document.createElement("div");
container.classList.add("container");

console.log(container);
boDy.appendChild(container);
for (let i = 0; i < 16; i++) {
  const box = document.createElement("div");
  container.appendChild(box);
}
