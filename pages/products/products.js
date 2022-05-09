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

let weekDates = []
let today = new Date
today.toLocaleDateString("en-GB").slice(0,5)

function setDates1() {
    let curr = new Date
   
    for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i
        //let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
        let day = new Date(curr.setDate(first)).toLocaleDateString("en-GB").slice(0,5)
        weekDates.push(day)
    }
    console.log(weekDates)

}

//const URL = "https://cinema-sem3-backend.azurewebsites.net/api/movies"
const URL = "http://localhost:8080/api/movies"

const days = ["Mandag", 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
//const dates = ["4/5", '5/5', '6/5', '7/5', '8/5', '9/5', '10/5'];
const dates = []
const dummyTimes = ['10:00', '12:00', '14:00']



export function makeTable() {

    const tableContainer = document.getElementById("tables-container-id")

    //setDates()
    setDates1() //test
    today.toLocaleDateString("en-GB").slice(0,5)
    console.log("Today is: " + today)

    //let movieList

    fetch(URL)
    .then(res => res.json())
    //.then(data => movieList = data)
    .then(fetchedMovies => {
        //console.log("hello there")
        //document.getElementById("title-id").innerText = fetchedMovies[0].name
        //document.getElementById("poster-id").src = fetchedMovies[0].posterLink

        fetchedMovies.forEach(movie => {

            const movieId = movie.id
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
                                        <span id="th-mon-id" class="date">${encode(weekDates[0])}</span>
                                    </th>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Tirsdag</span>
                                        <span class="date">${encode(weekDates[1])}</span>
                                    </th>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Onsdag</span>
                                        <span class="date">${encode(weekDates[2])}</span>
                                    </th>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Torsdag</span>
                                        <span class="date">${encode(weekDates[3])}</span>
                                    </th>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Fredag</span>
                                        <span class="date">${encode(weekDates[4])}</span>
                                    </th>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Lørdag</span>
                                        <span class="date">${encode(weekDates[5])}</span>
                                    </th>
                                    <th scope="col" style="text-align: center; width: 14.28%;">
                                        <span class="d-none d-xl-block">Søndag</span>
                                        <span class="date">${encode(weekDates[6])}</span>
                                    </th>
                                </tr>
                                <tbody id="tbody-id-${movie.id}">
                                    <tr id="row-time-1000-${movie.id}">
                                    </tr>
                                    <tr id="row-time-1245-${movie.id}">
                                     
                                    </tr>
                                    <tr id="row-time-1430-${movie.id}">
                                        
                                    </tr>
                                    <tr id="row-time-1715-${movie.id}">
                                        
                                    </tr>
                                    <tr id="row-time-2000-${movie.id}">
                                        
                                    </tr>
                                <tbody>
                            </thead>
                        </table>
                    </div>
                    </div>
                ` 

                document.getElementById("tables-container-id").innerHTML = createdTable //currently each cycle of the loop will overwrite the last

                //let spanToAppend = document.createElement('span')
                //spanToAppend.innerHTML = createdTable
                //spanToAppend.append(tableContainer)
                
                
                const headers = document.querySelectorAll('th')
                headers.forEach(header => {
                    //todo: get this to work
                    if(header.innerText < today) {
                        header.style.color = "grey"
                    }
                })

                //in each movie, for each showing to this:
                //todo: put them in at correct dates
                movie.showings.forEach(showing => {

                    console.log("Showing " + showing.id +  " at date: " + showing.date)

                    //let row = document.createElement('tr');
                    let row = document.getElementById("row-time-1000-" + movieId)
                    let cell = document.createElement('td')

                    cell.style.textAlign = "center"
                    let textNode = document.createTextNode(String(showing.time).slice(0,5));
 
                    //find out which row to put it, based on showing time
                    if(textNode.nodeValue == "10:00") {
                        console.log("It's 10")
                        row = document.getElementById("row-time-1000-" + movieId)
                    } else if(textNode.nodeValue == "12:45") {
                        console.log("It's 12:45")
                        row = document.getElementById("row-time-1245-" + movieId)
                    } else if(textNode.nodeValue == "14:30") {
                        console.log("It's 14:30")
                        row = document.getElementById("row-time-1430-" + movieId)
                    } else if(textNode.nodeValue == "17:15") {
                        console.log("It's 17:15")
                        row = document.getElementById("row-time-1715-" + movieId)
                    } else if(textNode.nodeValue == "20:00") {
                        console.log("It's 20:00")
                        row = document.getElementById("row-time-2000-" + movieId)
                    }
                    row.appendChild(cell);
                    cell.appendChild(textNode);
                    

                    let tbody = document.getElementById("tbody-id-" + movieId)

                    //tbody.appendChild(row);

                    //&#8205;

                })
                

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