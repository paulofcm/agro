const apiUrl = "https://my-json-server.typicode.com/andrefavaro/hackatonjson/";

const ul = document.querySelector("#food");

async function getFoods() {
  const response = await fetch(`${apiUrl}/foods`);
  const foods = await response.json();
  return foods;
}

let acumulator = "";

async function show() {
  const showFood = await getFoods();
  for (let i = 0; i < showFood.length; i++) {
    acumulator += `<li>
    <img src="${showFood[i].image}" height="100px">
    <p>Nome: ${showFood[i].name}</p>
    <p>Temperatura de armazenamento: ${showFood[i].storageTemperature}</p>
    <p>Umidade relativa: ${showFood[i].relativeHumidityPercentage}</p>
    <p>Tempo de armazenamento: ${showFood[i].storageTime}</p>
    </li>`;
  }
  ul.innerHTML = acumulator;
}

show();
