const main_api = document.getElementById("main-api");
const selected_character = document.getElementById("sel-character");
const everybody_character = document.getElementById('everybody');

// Api Harry Potter
const URL = "http://hp-api.herokuapp.com/api/characters";

selected_character.addEventListener("change", Fetch_Resources);

List_Characters();
function List_Characters() {
 fetch(URL)
  .then((response) => response.json())
  .then((data) => {
   return data.map((card) => {
    const opt_character = document.createElement("option");
    opt_character.value = card.name;
    opt_character.textContent = card.name;
    opt_character.setAttribute("id", card.id);
    selected_character.appendChild(opt_character);
    return card;
   });
  });
}

function Fetch_Resources() {
  const character = selected_character.value;
 fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    if( character === everybody_character.value) {
      main_api.innerHTML = '';
      return data.map(element => {create_card(element)})}
    else {return data.map(element => {if (element.name === character) { main_api.innerHTML = '';create_card(element)}
      })
    }        
  })
}
    



function create_card(data) {

 const card = document.createElement('div');
 const name_card = document.createElement('h2'); 
 const gender_card = document.createElement('p'); 
 const img_card = document.createElement('img');

 card.classList.add('card');
 name_card.setAttribute('id','name-card');
 gender_card.setAttribute('id','gender-card');
 img_card.classList.add('img-card');

 name_card.textContent = data.name;
 img_card.setAttribute("id", data.id);
 img_card.setAttribute("src", data.image);
 img_card.setAttribute("alt", data.name);
 gender_card.textContent = data.gender;
 card.appendChild(img_card);
 card.appendChild(name_card);
 card.appendChild(gender_card);
 main_api.appendChild(card); 
}
