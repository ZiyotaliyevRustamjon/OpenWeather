const btn = document.querySelector('.btn');
const show = document.querySelector('.show');
const apiKey = '02ee08e416fd2bca24124048c8d5feaf';

btn.addEventListener('click', () => {
    const inputText = document.querySelector('.inputText').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => show.innerHTML = `
        <h1>Name: ${data.name}</h1><hr>
        <h2>Country: ${data.sys.country}</h2>
        <h2>Clouds: ${data.weather[0].main}</h2>
        <h2>Clouds: ${data.weather[0].description}</h2>
        <h2>Shamol: ${data.wind.speed}</h2>
    `)
})

