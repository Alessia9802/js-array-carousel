/* Indicazioni:
una lista ordinata di 5 immagini,
una lista ordinata dei relativi 5 luoghi e
una lista di 5 news, creare un carosello come nella foto allegata. Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi
titolo e
testo. Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.
 */

const items = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

console.log(items);

const title = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];

console.log(title);

const text = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  "Lorem ipsum",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
];

console.log(text);

const carouselImage = document.querySelector(".items");
const carouselButtons = document.queryCommandValue(".arrow");
const singleItems = document.querySelector(".items .foto");

let image = 1
let button = 0

console.log(carouselImage, carouselButtons, singleItems);

carouselButtons.addEventListener("click") {
  if (carouselImage == singleItems) {
    let image
  }
}
