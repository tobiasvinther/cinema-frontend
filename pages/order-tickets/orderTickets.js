const URL = "http://localhost:8080/api/order-tickets/"

//import{SERVER}from "../../settings.js"
import {makeOptions} from "../../fetchUtils.js";

//const URL = SERVER+"api/order-tickets/"
let movieID
export function addTicketOrder(match){
    console.log("test")
    document.getElementById("btn-order").onclick = addTicket
    console.log(JSON.stringify(match?.params?.id))
    movieID = match?.params?.id
}

export function loadShowing() {
    //testArea
    fetch(window.location.href.toString())
        .then(res => res.json())
        .then(fetchedShowing => {
            console.log("HEllo")
            console.log(fetchedShowing)
        })
    //end testArea
}

export function addTicket(){

    const ticket ={}
    const id = movieID
    console.log("id is " + movieID)
    const amountOfTickets = document.getElementById("amountOfTickets").value
    console.log(ticket)

    fetch(URL+id+"/"+amountOfTickets,makeOptions("PATCH", ticket))
        .then(res=>{
            if(!res.ok){
                return Promise.reject("Error: " + res.status)
            }
            return res.json()
        })
        .then(ticket => {
            console.log(ticket)
        })
        .catch(e => console.error(e))
}