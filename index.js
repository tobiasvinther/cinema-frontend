import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import { loadJoke } from "./pages/joke/joke.js"
import { addHandler } from "./pages/navigate/navigate.js";
import { makeTable } from "./pages/products/products.js";
import { renderText, setActiveLink, renderTemplate, loadTemplate} from "./utils.js"

window.addEventListener("load", async () => {

  const templateHome = await loadTemplate("./pages/home/home.html")
  const templateAbout = await loadTemplate("./pages/about/about.html")
  const templateProducts = await loadTemplate("./pages/products/products.html")
  const templateOrderTicket = await loadTemplate("./pages/order-tickets/orderTickets.html")
  const templateJoke = await loadTemplate("./pages/joke/joke.html")
  const templateNavigate = await loadTemplate("./pages/navigate/navigate.html")

  const router = new Navigo("/", { hash: true });
  router
    .hooks({
      before(done, match) {
        setActiveLink("menu", match.url)
        done()
      }
    })
    .on("/", () => renderTemplate(templateHome, "content"))
    .on("/about", () => renderTemplate(templateAbout, "content"))
    .on("/products", (match) => {
      renderTemplate(templateProducts, "content")
      makeTable()
      if (match.params) {
        document.getElementById("selected-product-id").innerText = match.params.id
      }
    })
    .on("/joke", () => {
      renderTemplate(templateJoke, "content")
      loadJoke()
    })
    .on("/show-match", (match) => renderText(`<pre>${JSON.stringify(match, null, 2)}</pre>`, "content"))
    .on("/navigate-programatically", () => {
      renderTemplate(templateNavigate, "content")
      addHandler(router)
   })
    .on("/order-tickets", () => {
      renderTemplate(templateOrderTicket, "content")
    })
    .notFound(() => renderText("No page for this route found", "content"))
    .resolve()
});

window.onerror = (e) => alert(e)