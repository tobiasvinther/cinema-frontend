

const headers = ["Mandag\n2/5", 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
const dummyTimes = ['10:00', '12:00', '14:00']


export function makeTable() {

    let array = dummyTimes

    const table = document.getElementById('movie-table-id');

    //let existingRowsToRemove = document.querySelectorAll('tr');
    //existingRowsToRemove.forEach(row => row.remove());
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        //header.classList.add(`scope="col"`);
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
        console.log("I created a header")
    });

    table.appendChild(headerRow);

    array.forEach(showTime => {
        let row = document.createElement('tr');
        let cell = document.createElement('td');
        let textNode = document.createTextNode(showTime);

        cell.appendChild(textNode);
        row.appendChild(cell);
        table.appendChild(row);
    });

    /*
    array.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            console.log(text)
            let cell = document.createElement('td');
            console.log(text)
            let textNode = document.createTextNode(text);
            console.log(textNode)
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    */

}