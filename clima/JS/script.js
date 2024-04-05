

function getHour(){
    const h = new Date();
    const hours = ((h.getHours() < 10) ? "0" : "") + h.getHours();
    const minutes = ((h.getMinutes() < 10) ? "0" : "") + h.getMinutes();
    const secs = ((h.getSeconds() < 10) ? "0" : "") + h.getSeconds();
    document.write("Hora ")
    document.write( hours + ":" + minutes + ":" + secs);

}

getHour();

//La clave de la api
const Api_Key = '07208ca64c44d650620689bc48f9c338'

//llamando las cordenadas
const fetchApi = position =>{
    const{latitude , longitude} = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${Api_Key}` ) // LLamando la api
    .then(Response => Response.json()) //LLamando el archivo de la api
    .then(data => setweatherData(data))

    const setweatherData = data =>{
            console.log(data);
            const weatherData = {
                location: data.name, //Ubicacion
                description: data.weather[0].main,//descripcion
                humidity: data.main.humidity,//humedad
                pressure: data.main.pressure,//presion
                temperature: data.main.temp,//temperatura
                date: getDate(),
                time: getHour
              
              
          

            }
            //Esto es para mostrar los datos
            Object.keys(weatherData).forEach(key => {
                document.getElementById(key).textContent = weatherData[key];

            });

    }
    //mostrar la fecha correctamente
    const getDate = () => {
        let date = new Date();
        return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()} `
    };
  

  

}


//Cargando la ubicacion
const onload = () => {
    navigator.geolocation.getCurrentPosition(fetchApi);

}





