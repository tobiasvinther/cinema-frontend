//const URL = "https://cinema-sem3-backend.azurewebsites.net/api/movies"
const URL = "http://localhost:8080/api/movies"

const placeholderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export function createList() {
    fetch(URL)
        .then(res => res.json())
        .then(fetchedMovies => {

            fetchedMovies.forEach(movie => {

                let masterList = document.getElementById("list-id")
                let newListItem = document.createElement("div")
                masterList.appendChild(newListItem)
                const newListItemBody =
                `
                    <div class="row mb-4">
                        <h3 style="line-height: 1.0;">${encode(movie.name)}</h3>
                        <hr>
                        <div class="col-2">
                            <img src="${encode(movie.posterLink)}" alt="" width="270" height="">
                        </div>
                        <div class="col-1"></div>
                        <div class="col-9">
                            <p>${placeholderText}</p>
                            <span>
                            <a class="btn btn-success" href="#/" role="button">Køb billetter</a>
                            </span>
                        </div>
                    </div>
                `
                newListItem.innerHTML = newListItemBody

            })
        })
}

function encode(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#039;");
    return str;
}