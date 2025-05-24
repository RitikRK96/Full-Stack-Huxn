const result = document.querySelector(".result");

async function renderData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.json();
    result.innerHTML = `${data.name} </br> ${data.roll}</br>  ${data.Address}</br>  ${data.College} `;
  } catch (error) {
    console.log(error);
  }
}

renderData();
