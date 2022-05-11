import{SERVER}from "../../settings.js"
import {makeOptions} from "../../fetchUtils.js";

const URL = SERVER+"/"

export function addTicketOrder(){
    console.log("test")
    document.getElementById("btn").onclick = addTicket()
}

function addTicket(){
    const ticket ={}
    ticket.firstName = document.getElementById("firstName").value
    ticket.lastName = document.getElementById("lastName").value
    ticket.email = document.getElementById("email").value


    fetch(URL,makeOptions("POST",ticket,true))
        .then(res=>{
            if(!res.ok){
                return Promise.reject("Error: " + res.status)
            }
            return res.json()
        })
        .catch(e => console.error(e))
}