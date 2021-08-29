class Weather{
    constructor(city,country){
        this.apiKey = 'b7c7cc2498e6ac3327bdf287536828ed'
        this.city = city;
        this.country = country;

    }
    // Fetch weather from API

    async getWeather(){
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`)
    

        const responseData = await response.json();

        return responseData;
    
    }

    //change weather location

    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }

}

