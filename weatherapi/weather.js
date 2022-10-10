let loc=document.getElementById("location");
let tempIcon=document.getElementById("temp-icon");
let textValue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");



searchButton.addEventListener("click" , (e)=>{
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value='';

});
const getWeather=async (city)=>{
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e2aef3c0fbcd1130f3e069bd902e18b `,

        {mode: 'cors'}
        );

        const weatherData= await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const {id,main}=weatherData.weather[0];


        loc.textContent=name;
        climate.textContent=main;
        textValue.textContent=Math.round(feels_like-273);
        
        if(id<=232 && id>=200)
        {
            tempIcon.src="icon/thunderstorm.svg";
        }
        else if(id<=321 && id>=300)
        {
            tempIcon.src="icon/rain.svg";
        }
        else if(id<=531 && id>=500)
        {
            tempIcon.src="icon/cloud.svg";
        }
        else if(id<=622 && id>=600)
        {
            tempIcon.src="icon/snow.svg";
        }
        else if(id<=781 && id>=700)
        {
            tempIcon.src="icon/cloudy-sunny.svg";
        }
        else if(id==800)
        {
            tempIcon.src="icon/sunny.svg";
        }

        console.log(data);

    }
    catch(error)
    {
        alert('');
    }
};







window.addEventListener("load" ,()=> {

    let lon;
    let lat;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=> {

        lon=position.coords.longitude;
        lat=position.coords.latitude;

            

            
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6e2aef3c0fbcd1130f3e069bd902e18b   `,
            {mode: 'cors'}
            )
            .then((response)=>{
                return response.json();
            })
            .then (data =>
            {

                const{name}=data;
                const{feels_like}=data.main;
                const{id,main}=data.weather[0];

                loc.textContent=name;
                climate.textContent=main;
                textValue.textContent=Math.round(feels_like-273);
                console.log(data);

                if(id==800)
                {
                    tempIcon.src="icon/sunny.svg";
                }
                else if(id<=804 && id>=801)
                {
                    tempIcon.src="icon/cloud.svg";
                }
                else if(id<=232 && id>=200)
                {
                    tempIcon.src="icon/thunderstorm.svg";
                }
                else if(id<=321 && id>=300)
                {
                    tempIcon.src="icon/rain.svg";
                }
                else if(id<=622 && id>=600)
                {
                    tempIcon.src="icon/snow.svg";
                }
                else if(id<=781 && id>=700)
                {
                    tempIcon.src="icon/cloudy-sunny.svg";
                }
                
        

               


            })
        }   

    )}
})


