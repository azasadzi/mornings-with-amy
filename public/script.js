console.log("script")

var outfits = [
    {
        minTemp:-150,
        maxTemp:40,
        outfit:"Winter coat, long pants, sweater, boots, scarf"
    },
    {
        minTemp:40,
        maxTemp:65,
        outfit:"Long pants, short sleave shirt and cardigan, or sweater, closed shoes"
    },
    {
        minTemp:65,
        maxTemp:150,
        outfit:"Shorts, short sleave shirt or tank top, sandals, bring light cardigan just in case"
    }
]

var randomDog = ()=>{  //naming the function, not the data
    fetch('https://random.dog/woof.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
        var url= myJson.url;
        if(url.includes(".mp4")){
            var html=`<video height="245" controls> <source src="${url}" type="video/mp4"/> </video>`
        }
        else{
            var html = `<img src="${url}" style="max-height:245px; max-width:100%;"/>`;
        }
    
        document.getElementById("randomdog").innerHTML = html; //programming dynamic html; right now in html, there is nothing in the id that is defined for random dog because it is random, we dont know what it is going to be.  This code injects something into the html that will be displayed
    });
}

var randomMovie = ()=>{
fetch('/favorite-movies')
.then(function(response) {
    return response.json();
  })
  .then(function(movie) {
      console.log(movie)
      var html = `<h3> "${movie.title} (${movie.year})"</h3> <p> Amy's Rating ${movie.rating}/5</p>`;
      document.getElementById("randomMovie").innerHTML = html;
  });

}


var weatherData = ()=>{
fetch('/weather') //work around where we are pinging local server 3000 to contact the weather server to get around Cors
.then((response)=>{ 
    console.log(response)
    return response.json();
})
.then((weather) =>{
    console.log(weather) //dont really need this, just nice to see if it is working
    var temp = weather.consolidated_weather[0].the_temp;
    console.log(temp)
    var fare = (temp*9/5)+32;
    var outfit = null;
    for(var i =0; i<outfits.length; i++){
        if(fare <= outfits[i].maxTemp && fare >= outfits[i].minTemp){
            outfit = outfits[i];
        }
    }
    var html = `<h3> Current Temp: ${fare}°F </h3> <p> Recommended outfit: ${outfit.outfit} </p>`
    document.getElementById("temp-outfit").innerHTML = html;
})
}


randomDog(); //calls function
randomMovie();
weatherData();