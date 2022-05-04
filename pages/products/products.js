

const days = ["Mandag", 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
const dates = ["4/5", '5/5', '6/5', '7/5', '8/5', '9/5', '10/5'];
const dummyTimes = ['10:00', '12:00', '14:00']


export function makeTable() {

    let array = dummyTimes

    const table = document.getElementById('movie-table-id')
    const tableHeader = document.getElementById('movie-header-id')
    const tableBody = document.getElementById('movie-body-id')

    //let existingRowsToRemove = document.querySelectorAll('tr');
    //existingRowsToRemove.forEach(row => row.remove());
    let headerRow = document.createElement('tr')

    days.forEach(headerText => {
        let header = document.createElement('th')
        header.scope = "col"
        header.style.textAlign = "center"
        header.style.width = "14.28%"
        let textNode = document.createTextNode(headerText)
        header.appendChild(textNode)
        headerRow.appendChild(header)
    });

    tableHeader.appendChild(headerRow);

    array.forEach(showTime => {
        let row = document.createElement('tr');
        let cell = document.createElement('td');
        cell.style.textAlign = "center"
        let textNode = document.createTextNode(showTime);

        cell.appendChild(textNode);
        row.appendChild(cell);
        tableBody.appendChild(row);
    });

    fetch(URL)
        .then(res => res.json())
        .then(movie => {
            console.log("hello there")
            document.getElementById("fetch-test-id").innerText = movie[0].name
        })

}

//const URL = "https://cinema-sem3-backend.azurewebsites.net/api/movies"
const URL = "http://localhost:8080/api/movies"

function fetchMovies() {
    fetch(URL)
        .then(res => res.json())
        .then(movie => {
            document.getElementById("fetch-test-id").innerText = movie.title
        })
}