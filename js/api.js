
//             function traer() {
//     fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.59&longitude=-58.38&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m") //solicitud a la url
//         .then(res => res.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json). Extraemos el contenido JSON desde la respuesta.
//         .then(res => {
//             console.log(res)
//             contenido.innerHTML= `
//             <p>Temperatura: ${res.result[0].temperature_2m}</p>
//             <p>Viento: ${res.result[0].windspeed_10m}</p> `
            
//         })
// }

const app = new Vue({
    el: '#app',
    data: {
        info: {},
        time: ""
    },
    created() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            this.info=data.bpi
            this.time=data.time.updated
            })
        .catch( error => console.log(error));
    }
});
