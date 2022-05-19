const URL = "https://cinema-sem3-backend.azurewebsites.net/api/movies"
//const URL = "http://localhost:8080/api/movies"

export async function sliderImages(){
    const carouselItems = document.getElementById("carousel-wrapper")
    await fetch(URL)
        .then(res => res.json())
        .then(fetchedMovies => {
            const list = document.getElementById("moar");
            const buttons = document.getElementById("buttons");
            for(let i = 0; i < fetchedMovies.length; i++) {
                if (i === 0) {
                    list.innerHTML += '<div class="carousel-item active"> <img src="'+fetchedMovies[i].posterLink+'" class="d-block w-100" alt="..."> </div>'
                    buttons.innerHTML += '<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="'+i+'" class="active" aria-current="true" aria-label="Slide '+i+1+'"></button>'
                } else {
                    list.innerHTML += '<div class="carousel-item"> <img src="'+fetchedMovies[i].posterLink+'" class="d-block w-100" alt="..."> </div>'
                    buttons.innerHTML += '<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="'+i+'" aria-label="Slide '+i+1+'"></button>'
                }
                console.log(i);
            }
            }
        )}
