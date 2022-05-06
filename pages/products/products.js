function encode(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#039;");
    return str;
}

function setDates() {
   
    //maybe refactor to use a loop or something

    var day1 = new Date()
    var day2 = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate()+1);
    var day3 = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate()+2);
    var day4 = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate()+3);
    var day5 = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate()+4);
    var day6 = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate()+5);
    var day7 = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate()+6);

    //day1 = day1.toJSON().slice(5,10).replace(/(^|-)0+/g, "/")
    day1 = day1.toLocaleDateString("en-GB").slice(0,5)
    day2 = day2.toLocaleDateString("en-GB").slice(0,5)
    day3 = day3.toLocaleDateString("en-GB").slice(0,5)
    day4 = day4.toLocaleDateString("en-GB").slice(0,5)
    day5 = day5.toLocaleDateString("en-GB").slice(0,5)
    day6 = day6.toLocaleDateString("en-GB").slice(0,5)
    day7 = day7.toLocaleDateString("en-GB").slice(0,5)

    dates.push(day1)
    dates.push(day2)
    dates.push(day3)
    dates.push(day4)
    dates.push(day5)
    dates.push(day6)
    dates.push(day7)

    console.log(dates)
}

//const URL = "https://cinema-sem3-backend.azurewebsites.net/api/movies"
const URL = "http://localhost:8080/api/movies"

const days = ["Mandag", 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
//const dates = ["4/5", '5/5', '6/5', '7/5', '8/5', '9/5', '10/5'];
const dates = []
const dummyTimes = ['10:00', '12:00', '14:00']



export function makeTable() {

    setDates()

    //let movieList

    fetch(URL)
    .then(res => res.json())
    //.then(data => movieList = data)
    .then(fetchedMovies => {
        //console.log("hello there")
        //document.getElementById("title-id").innerText = fetchedMovies[0].name
        //document.getElementById("poster-id").src = fetchedMovies[0].posterLink

        fetchedMovies.forEach(movie => {


            console.log("Im creating a table for: " + movie.name)
            //let movieTitle = document.createElement('h2')
            //document.getElementById("fetch-test-id").appendChild(movieTitle)
            //movieTitle.innerText = movie.name

            movie.showings.forEach(showings => {
                console.log("Date and time for showing: " + showings.date + " " + showings.time)
                
                let showingDateFormatted = showings.date.slice(5,10).replace(/-/g, "/")
                //let showingDateFormattedAndStringified = String(showingDateFormatted).split("").reverse().join("")
                //let showingDateFormatted = showings.date.toLocaleDateString("en-GB").slice(0,5)

                console.log("Date and time for showing: " + showingDateFormatted + " " + showings.time)
            })

            /*
            movie.forEach(showing => {
                console.log("Showing at date: " + showing.date)
            })
            */

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

                document.getElementById("tables-container-id").innerHTML = createdTable //currently each cycle of the loop will overwrite the last

                //let spanToAppend = document.createElement('span')
                // spanToAppend.append(document.getElementById("tables-container-id"))
                //spanToAppend.innerHTML = createdTable
                










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