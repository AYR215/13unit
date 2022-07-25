import "./style.css";

const greeting = document.querySelector("#hi");
greeting.innerText = "Hello, world!";

const container = document.querySelector("#container");

async function getInfo(id) {
    const response = await fetch("http://127.0.0.1:3000/words");
    const result = await response.json();
    const text = result[id].title;
    container.innerHTML += `<p>${text}</p>`;
    console.log(text);
}

for (let i = 0; i < 4; i++) {
    getInfo(i);
}