class Temperature {
    celsius;
    constructor(celsius) {
        this.celsius = celsius;
    }
    setCelsius(celsius){
        this.celsius=celsius;
    }
    getCelsius(celsius){
        return this.celsius
    }
    setFahrenheit(fahrenheit){
        return 9/5*this.celsius + 32
    }
    getFahrenheit(){
        return this.setFahrenheit()
    }
    setKevin(kevin){
        return this.celsius + 273.15
    }
    getKevin(){
        return this.setKevin()
    }
}