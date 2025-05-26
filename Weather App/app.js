const input = document.getElementById('searchBox');
const tempEl = document.querySelector('.temp');
const cityEl = document.querySelector('.city');
const humidityEl = document.querySelector('.humidity');
const windspeedEl = document.querySelector('.windspeed div');

input.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    const city = input.value.trim();
    if (city === "") return;

    try {
      const response = await fetch(`https://wttr.in/${city}?format=j1`);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();

      // Extract and display the data
      const current = data.current_condition[0];
      const temperature = current.temp_C;
      const humidity = current.humidity;
      const windspeed = current.windspeedKmph;

      tempEl.innerHTML = `${temperature}<sup>o</sup>C`;
      cityEl.textContent = city;
      humidityEl.textContent = `${humidity}%`;
      windspeedEl.textContent = `${windspeed} Km/h`;

    } catch (error) {
      alert("Could not fetch weather data. Please check city name.");
      console.error(error);
    }

    input.value = '';
  }
});
