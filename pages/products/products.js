//const URL = "https://cinema-sem3-backend.azurewebsites.net/api/movies"
const URL = "http://localhost:8080/api/movies"

const days = ["Mandag", 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
const dates = ["4/5", '5/5', '6/5', '7/5', '8/5', '9/5', '10/5'];
const dummyTimes = ['10:00', '12:00', '14:00']



export function makeTable() {

    //let movieList

    fetch(URL)
    .then(res => res.json())
    //.then(data => movieList = data)
    .then(fetchedMovies => {
        console.log("hello there")
        document.getElementById("title-id").innerText = fetchedMovies[0].name
        document.getElementById("poster-id").src = fetchedMovies[0].posterLink

        const rows = data.map(user => 
            `
            <tr>
              <td>${encode(user.name)}</td>
              <td>${encode(user.phone)}</td>
              <td>${encode(user.address.street)}</td>
              <td>${encode(user.address.city)}</td>
            </tr>
            `
            ).join("\n")
            document.getElementById("tbl-body").innerHTML = rows

        fetchedMovies.forEach(movie => {
            let movieTitle = document.createElement('h2')
            document.getElementById("fetch-test-id").appendChild(movieTitle)
            movieTitle.innerText = movie.name

            /*
            let tablesArea = document.getElementById('tables-area-id')
            let movieTable = document.createElement('table')
            movieTable.class = "table"
            movieTable.append(tablesArea)
            let movieTableHead = document.createElement('thead')
            movieTableHead.append(movieTable)
            let moiveTbody = document.createElement('tbody')
            movieTableHead.append(moiveTbody)
            let headerRow = document.createElement('tr')
            
            days.forEach(headerText => {
                let header = document.createElement('th')
                header.scope = "col"
                header.style.textAlign = "center"
                header.style.width = "14.28%"
                let textNode = document.createTextNode(headerText)
                header.appendChild(textNode)
                headerRow.appendChild(header)
                console.log("hi")
            });
        
            movieTableHead.appendChild(headerRow);
            */

        })
    })

    let array = dummyTimes

    /*
    //const table = document.getElementById('movie-table-id')
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
*/
   

}