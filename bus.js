

//   select seat

const seats = document.getElementsByClassName("seat");
let selectedSeat = 0;
let prices=550;
      
for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    selectedSeat = selectedSeat + 1;
    // more than 4 seat validation
    if(selectedSeat >4){
        alert("you can't select more than 4 seat")
        return
    }

// show in ui
const ui=document.getElementById('ui')
console.log(ui)
const div = document.createElement('div')
ui.appendChild(div)
div.classList.add('flex')
div.classList.add('justify-between')
div.classList.add('mt-4')
const btnText = e.target.innerText;
const h1= document.createElement('h1')
h1.innerText=btnText

const p= document.createElement('p')
const text= 'Econonmy'
p.innerText=text
const price= document.createElement('p')
const priceText= '550'
price.innerText=priceText

div.appendChild(h1)
div.appendChild(p)
div.appendChild(price)


// total calculation
const priceElement=document.getElementById('total')
const priceTexts= priceElement.innerText
const priceNumber=parseInt(priceTexts)

const pricess= priceNumber+prices

priceElement.innerText=pricess


// grand total

const grandPriceElement=document.getElementById('grand-total')
const grandPriceTexts= grandPriceElement.innerText
const granPriceNumber=parseInt(grandPriceTexts)

const pricesss= granPriceNumber+prices;
grandPriceElement.innerText=pricesss;


    // left seat validation
    const leftSeats= document.getElementById('left-seat')
    const seatText= leftSeats.innerText
    const leftSeat=parseInt(seatText)
    const seatLeft= leftSeat-1;
    
    leftSeats.innerText = seatLeft;
    

    // selected seat
    const selectSeatElement= document.getElementById('seat')
    const selectSeat= selectSeatElement.innerText
    const addSeat=parseInt(selectSeat)
    const seat= addSeat+1;
    selectSeatElement.innerText=seat;


// double select validation
    const elementId = e.currentTarget;
    elementId.disabled = true;

    // seat colour set
    const elementsId = e.target.id;
    setBackgroundById(elementsId);
  });
}
// apply btn



// clicking buy ticket button

document.getElementById("buyTicket").addEventListener("click", function () {
    const targetSectionId = this.getAttribute("data-target");
  
    document.getElementById(targetSectionId).style.display = "block";
  
    document
      .getElementById(targetSectionId)
      .scrollIntoView({ behavior: "smooth" });
  });