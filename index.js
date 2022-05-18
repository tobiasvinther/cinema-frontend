import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import { createList } from "./pages/movielist/movielist.js";
import {addHandler, addHandlerLink} from "./pages/navigate/navigate.js";
import { makeTable } from "./pages/products/products.js";
import {addTicketOrder, loadShowing} from "./pages/order-tickets/orderTickets.js";
import { renderText, setActiveLink, renderTemplate, loadTemplate} from "./utils.js"
import {sliderImages} from "./pages/home/home.js"

window.addEventListener("load", async () => {

  const templateHome = await loadTemplate("./pages/home/home.html")
  const templateAbout = await loadTemplate("./pages/about/about.html")
  const templateProducts = await loadTemplate("./pages/products/products.html")
  const templateOrderTicket = await loadTemplate("./pages/order-tickets/orderTickets.html")
  const templateTicketOrdered = await loadTemplate("./pages/order-tickets/ticket-ordered.html")
  const templateJoke = await loadTemplate("./pages/joke/joke.html")
  const templateNavigate = await loadTemplate("./pages/navigate/navigate.html")
  const templateMovieList = await loadTemplate("./pages/movielist/movielist.html")

  const router = new Navigo("/", { hash: true });
  router
    .hooks({
      before(done, match) {
        setActiveLink("menu", match.url)
        done()
      }
    })
    .on("/", () => {
      renderTemplate(templateHome, "content")
      sliderImages()
    })
    .on("/about", () => renderTemplate(templateAbout, "content"))
    .on("/products", (match) => {
      renderTemplate(templateProducts, "content")
      makeTable()
      if (match.params) {
        document.getElementById("selected-product-id").innerText = match.params.id
      }
    })
    .on("/joke", () => {
      renderTemplate(templateMovieList, "content")
      createList()
    })
    .on("/show-match", (match) => renderText(`<pre>${JSON.stringify(match, null, 2)}</pre>`, "content"))
    .on("/navigate-programatically", () => {
      renderTemplate(templateNavigate, "content")
      addHandler(router)
   })
    .on("/order-tickets", (match) => {
      renderTemplate(templateOrderTicket, "content")
        //addHandlerLink(router)
        loadShowing(match)
        addTicketOrder(match)
    })
    .on("/ticket-ordered", () => {
        renderTemplate(templateTicketOrdered, "content")
      })
    .notFound(() => renderText("No page for this route found", "content"))
    .resolve()
});

window.onerror = (e) => alert(e)