

const headers = ["Mandag", 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
const dummyTimes = ['10:00', '12:00', '14:00']


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
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
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

}