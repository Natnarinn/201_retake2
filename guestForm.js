//65130500018 Natnarin Chaisiripanich
import { createGuestList } from "./data/guestdata.js"
//const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const firstE = document.getElementById("search-input")
    firstE.addEventListener("keyup", (event) => {
      searchGuest(event)
    })
    const but = document.getElementById("add-guest-btn")
    but.addEventListener("click", addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const displayArea = document.getElementById("display-area")
    const divEle = document.createElement("div")

    const span1 = document.createElement("span")
    span1.innerText = guestItem.firstname + " " + guestItem.lastname
    displayArea.appendChild(span1)

    const span2 = document.createElement("span")
    span2.className = "remove-icon"
    span2.id = "firstname-lastname"
    span2.style = "cursor:pointer;color:red"
    span2.innerText = " [X]"
    span2.addEventListener("click", removeGuest)

    displayArea.appendChild(divEle)
    divEle.appendChild(span1)
    divEle.appendChild(span2)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    guestResult.forEach((e) => displayGuest(e))
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const display = document.getElementById("display-area")
    display.replaceChildren()
    displayGuests(guests.searchGuests(event.target.value))
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstName = document.getElementById("firstname-input").value
    const lastName = document.getElementById("lastname-input").value
    const clearDisplay = document.getElementById("display-area")
    clearDisplay.replaceChildren()

    displayGuests(guests.addNewGuest(firstName, lastName))
    document.getElementById("firstname-input").value = ""
    document.getElementById("lastname-input").value = ""
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const displayArea = document.getElementById("display-area")
    displayArea.replaceChildren()

    guests.removeGuest({
      firstname:
        event.target.parentElement.children[0].textContent.split(" ")[0],
      lastname: event.target.parentElement.children[0].textContent.split(" ")[1]
    })

    displayGuests(
      guests.searchGuests(document.getElementById("search-input").value)
    )
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
// module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())
