const container = document.getElementById("container");

for (let i = 0; i < 4; i++) {
  const div = document.createElement("div");
  div.style.width = "75px";
  div.style.height = "75px";
  div.style.backgroundColor = "palevioletred";
  container.appendChild(div);
}