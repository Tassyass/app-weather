// waiting for DOM to load first
document.addEventListener('DOMContentLoaded',(e) =>{
    e.preventDefault()
    getInput();

})

// Setting up the API
const apikey = '1db2821680c55cae961eb3354269fb98';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=`;

// Getting elements from html
const areaCode = document.querySelector('#areacode')
const cityName = document.querySelector('#city-name')
const humidity = document.querySelector('#humidity')
const wind = document.querySelector('#wind')
const img = document.querySelector('.img-thumbnail')
const input = document.querySelector('#city-input');
const temperature = document.querySelector('#temperature');
const condition = document.querySelector('#weather-condition');
const search = document.querySelector('#search');
const error = document.querySelector('#error-message')



// Function to retrieve data from the External API

function getWeather(city){
    fetch(apiUrl + city + `&appid=${apikey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

// Using the data retrieved

        areaCode.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + "°c";
        humidity.innerHTML = data.main.humidity + '%';
        wind.innerHTML = data.wind.speed + '' + 'Km/h';
        condition.innerHTML = data.weather[0].main;
        cityName.innerHTML = data.name;

        
// Adding images of a specific weather climate
        if(data.weather[0].main === 'Rain'){
            img.src = 'assets/rain.jpeg';
            
        }else if(data.weather[0].main === 'Mist'){
            img.src = 'assets/humidity.png'
            

        }else if(data.weather[0].main === 'Clear'){
            img.src = 'assets/sunny.png';
           

        }else if(data.weather[0].main === 'Clouds'){
            img.src = 'assets/cloudy.png'
            
        }else if(data.weather[0].main === 'Drizzle'){
            img.src = 'assets/drizzle.png'
           
        }else{
            img.src = 'assets/wind.png'
            
        }      
        

    })
    .catch(error => {
        alert('Enter a City');
        error.log(Error)
        

       
    })
}
// Getting Input data

function getInput(){
    search.addEventListener('click', (e)=>{
        e.preventDefault()
        getWeather(input.value)
    })
}









