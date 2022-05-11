export function addHandler(router) {
    document.getElementById("btn").onclick = () => {
        const route = document.getElementById("route-to-navigate-to").value
        router.navigate(route)
    }
}

export function addHandlerLink(router) {
    document.getElementById("btn").onclick = () => {//når vi klikker
        const route = document.getElementById("btn").value//giv mig værdien på denne knap
        router.navigate(route)//Naviger mig til denne route
            .then()
    }
}


