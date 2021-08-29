class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon= document.getElementById('w-icon')
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.highest = document.getElementById('w-highest');
        this.lowest = document.getElementById('w-lowest');
        
    }

    paint(weather){
        this.location.textContent = weather.name.toUpperCase();
        this.desc.textContent = weather.weather[0].description.toUpperCase();
        this.string.textContent = `${weather.main.temp}°`;
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}°`;
        this.highest.textContent = `Highest Temp: ${weather.main.temp_max}°`;
        this.lowest.textContent = `Relative Humidity: ${weather.main.temp_min}°`;




    }
}