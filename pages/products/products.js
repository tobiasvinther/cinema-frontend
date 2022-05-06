function encode(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#039;");
    return str;
}

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
        //document.getElementById("title-id").innerText = fetchedMovies[0].name
        //document.getElementById("poster-id").src = fetchedMovies[0].posterLink

        fetchedMovies.forEach(movie => {
            let movieTitle = document.createElement('h2')
            document.getElementById("fetch-test-id").appendChild(movieTitle)
            movieTitle.innerText = movie.name

            const createdTable =  
                `
                <div class="row">
                    <h3 style="line-height: 1.0;">${encode(movie.name)}</h3>
                    <hr>
                    <div class="col-2">
                        <img src="${encode(movie.posterLink)}" alt="" width="270" height="">
                    </div>
                    <div class="col-1"></div>
                    <div class="col-9">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Mandag</span>
                                        <span class="date">${encode(dates[0])}</span>
                                    </th>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Tirsdag</span>
                                        <span class="date">${encode(dates[1])}</span>
                                    </th>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Onsdag</span>
                                        <span class="date">${encode(dates[2])}</span>
                                    </th>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Torsdag</span>
                                        <span class="date">${encode(dates[3])}</span>
                                    </th>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Fredag</span>
                                        <span class="date">${encode(dates[4])}</span>
                                    </th>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Lørdag</span>
                                        <span class="date">${encode(dates[5])}</span>
                                    </th>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Søndag</span>
                                        <span class="date">${encode(dates[6])}</span>
                                    </th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td style="text-align: center;">10:00</td>
                                        <td style="text-align: center;">10:00</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center;">12:00</td>
                                        <td style="text-align: center;">12:00</td>
                                    </tr>
                                <tbody>
                            </thead>
                        </table>
                    </div>
                    </div>
                `  
                document.getElementById("tables-container-id").innerHTML = createdTable
                

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
    /*
    let array = dummyTimes

    
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