const URL = "https://cinema-sem3-backend.azurewebsites.net/api/movies"
//const URL = "http://localhost:8080/api/movies"

let weekDates = []
let today = new Date
today.toLocaleDateString("en-GB").slice(0, 5)
let todayUnformatted = new Date

function setDates1() {
    let curr = new Date

    for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i
        //let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
        let day = new Date(curr.setDate(first)).toLocaleDateString("en-GB").slice(0, 5)
        weekDates.push(day)
    }
    console.log(weekDates)

}

export function makeTable() {

    const tableContainer = document.getElementById("tables-container-id")

    //setDates()
    setDates1() //test
    today.toLocaleDateString("en-GB").slice(0, 5)
    console.log("Today is: " + today)

    //let movieList

    fetch(URL)
        .then(res => res.json())
        //.then(data => movieList = data)
        .then(fetchedMovies => {


            //loop through each movie
            fetchedMovies.forEach(movie => {

                const movieId = movie.id
                console.log("Im creating a table for: " + movie.name)

                //modal stuff (not working correcetly)
                let exampleModal = document.getElementById('exampleModal')
                let modalTitle = exampleModal.querySelector('.modal-title')
                modalTitle.innerText = movie.name


                //create formattede showing dates for the week
                movie.showings.forEach(showings => {

                    let showingDateUnformatted = new Date(showings.date)
                    console.log("Today: " + todayUnformatted + " vs. " + showingDateUnformatted)

                    console.log("Date and time for showing: " + showings.date + " " + showings.time)

                    let showingDateFormatted = showings.date.slice(5, 10).replace(/-/g, "/")
                    //let showingDateFormattedAndStringified = String(showingDateFormatted).split("").reverse().join("")
                    //let showingDateFormatted = showings.date.toLocaleDateString("en-GB").slice(0,5)

                    console.log("Date and time for showing: " + showingDateFormatted + " " + showings.time)
                })

                const createdTable =
                    `
                <div class="row mt-3">
                    <h3 style="line-height: 1.0;" padding-left: 0px;>${encode(movie.name)}</h3>
                    <hr/>
                    <div class="col-2">
                        <img src="${encode(movie.posterLink)}" alt="" width="220" height="">
                    </div>
                    <div class="col-1"></div>
                    <div class="col-9">
                        <table class="table" id="table-id-${movie.id}">
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
                        <span class="d-grid gap-2">
                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Læs om filmen</button>
                        </span>
                    </div>
                </div>
                <div class="my-4">\u0020</div>
                `

                let spanToAppend = document.createElement('span')
                spanToAppend.innerHTML = createdTable
                tableContainer.appendChild(spanToAppend)
                
                //trying to color dates that are before today's date grey
                const headers = document.querySelectorAll('th')
                headers.forEach(header => {
                    if (header.innerText < today) {
                        header.style.color = "grey"
                    }
                })

                //1. fill out table(s) with blank cells using loops
                //2. use showingDateAsInt to get the index of the specific cells we want (since it will be equal to the corresponding column)
                //3. Use seomthing like document.getElementById("myTable").rows[0].cells[0].innerHTML to put in the data

                //loop through table and fill it with "empty" cells
                for(let i=0; i <= 4; i++) {
                    let row = document.getElementById("tbody-id-" + movieId).rows[i]
                    console.log("I'm going through rows")
                    for(let j=0; j <= 6; j++) {
                        console.log("I'm creating cells")
                        let cell = document.createElement('td')
                        cell.style = "text-align: center"
                        cell.innerText = "---"
                        cell.style = "color: white; text-align: center;"
                        row.appendChild(cell);
                    }

                }

                //in each movie, for each showing:
                movie.showings.forEach(showing => {

                    //find out which day of the week the showing is, in order to later put it in the right column
                    let showingDateAsInt = new Date(showing.date)
                    showingDateAsInt = showingDateAsInt.getDay()

                    //getDay sees sunday as the first day, so get it to use monday as starting day instead
                    if(showingDateAsInt == 0) {
                        showingDateAsInt = 6
                    }   else {
                            showingDateAsInt --
                        }

                    let row = document.getElementById("row-time-1000-" + movieId)
                    let textNode = document.createTextNode(String(showing.time).slice(0, 5)); //stringify and shorten our timeslot

                    //find out which row to put it, based on showing time
                    if (textNode.nodeValue == "10:00") {
                        console.log("It's 10")
                        console.log("Day int is: " + showingDateAsInt + ", " + typeof showingDateAsInt)
                        document.getElementById("row-time-1000-" + movieId).cells[showingDateAsInt].innerHTML = `<a data-navigo style="text-decoration:none; color: black;" href="#/order-tickets?id=${showing.id}" role="button">${textNode.nodeValue}</a>`
                        
                    } else if (textNode.nodeValue == "12:45") {
                        console.log("It's 12:45")
                        row = document.getElementById("row-time-1245-" + movieId)
                        document.getElementById("row-time-1245-" + movieId).cells[showingDateAsInt].innerHTML = `<a style="text-decoration:none; color: black;" href="#/order-tickets?id=${showing.id}" role="button">${textNode.nodeValue}</a>`
                      
                    } else if (textNode.nodeValue == "14:30") {
                        console.log("It's 14:30")
                        row = document.getElementById("row-time-1430-" + movieId)
                        document.getElementById("row-time-1430-" + movieId).cells[showingDateAsInt].innerHTML = `<a style="text-decoration:none; color: black;" href="#/order-tickets?id=${showing.id}" role="button">${textNode.nodeValue}</a>`
                    
                    } else if (textNode.nodeValue == "17:15") {
                        console.log("It's 17:15")
                        row = document.getElementById("row-time-1715-" + movieId)
                        document.getElementById("row-time-1715-" + movieId).cells[showingDateAsInt].innerHTML = `<a style="text-decoration:none; color: black;" href="#/order-tickets?id=${showing.id}" role="button">${textNode.nodeValue}</a>`
                    
                    } else if (textNode.nodeValue == "20:00") {
                        console.log("It's 20:00")
                        row = document.getElementById("row-time-2000-" + movieId)
                        document.getElementById("row-time-2000-" + movieId).cells[showingDateAsInt].innerHTML = `<a style="text-decoration:none; color: black;" href="#/order-tickets?id=${showing.id}" role="button">${textNode.nodeValue}</a>`
                    }

                })

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

