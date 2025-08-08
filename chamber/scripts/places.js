import {places} from '../data/places.mjs'
console.log(places)

const container = document.getElementById("places-container");

places.forEach(place => {
  const card = document.createElement('div');
  card.classList.add('place-card');
  
  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="images/${place.photo}" alt="${place.name}" width="150" height="200">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;
  container.appendChild(card);
});