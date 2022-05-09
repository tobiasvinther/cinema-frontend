

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
    let headerRow = document.createElement('tr');//headerRow er en parrent til header. header er en parrent til textNode.

    headers.forEach(headerText => {
        let header = document.createElement('th');
        header.scope = "col";
        header.style.textAlign = "center"
        header.style.width = "14.28%"
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);//I den firkantede collonne der skal teksten være fx. "Mandag"
        headerRow.appendChild(header);//headerRowet der skal firkanten collonne være
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
