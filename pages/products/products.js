

const hall = {"Hall": 1};
const headers = ["Mandag", 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
const dummyTimes = ['10:00', '12:00', '14:00', '16:00']


export function makeTable() {

    let array = dummyTimes

    const table = document.getElementById('movie-table-id');
    const tableHeader = document.getElementById('movie-header-id');
    const tableBody = document.getElementById('movie-body-id');

    //let existingRowsToRemove = document.querySelectorAll('tr');
    //existingRowsToRemove.forEach(row => row.remove());
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        header.scope = "col";
        header.style.textAlign = "center"
        header.style.width = "14.28%"
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    tableHeader.appendChild(headerRow);

    array.forEach(showTime => {
        let row = document.createElement('tr');
        for (let i = 0; i <7; i++) {
            let cell = document.createElement('td');
            cell.style.textAlign = "center"
            let textNode = document.createTextNode(showTime);

            let aTag = document.createElement('a')// det er et aTag. Man kan lave any tag fra html
            aTag.href = "/order-tickets"
            aTag.dataset.navigo = "";
            cell.appendChild(aTag);

            aTag.appendChild(textNode);
            cell.addEventListener("click", () =>{ //Dette stykke er til t få fat i tidspunktet fra showings
                const movieTime = cell.innerText
                //router.navigate("order-tickets")
            })
            row.appendChild(cell);
            tableBody.appendChild(row);

        }
    });
}
