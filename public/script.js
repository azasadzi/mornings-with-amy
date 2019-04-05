console.log("script")

var randomDog = ()=>{
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
    
        document.getElementById("randomdog").innerHTML = html;
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

randomDog();
randomMovie();