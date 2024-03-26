let pokemonList = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];

// Answers

// Question 1
function changeName() {
    l
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("host-name").textContent = 'Ezequiel Cutin'
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("collaborator-name").textContent = 'Emma Johnson'
});

// Question 2
// You can also create their own CSS classes in style.css file and use that. 
let hideButton = document.querySelector("#instruction_button")
hideButton.addEventListener("click", hideInstructions);

function hideInstructions() {
    console.log("Hide instructions button has been clicked!");
    let questions = document.querySelectorAll(".question");
    for(let i = 0; i < questions.length; i++){
        questions[i].style.display = "none";
    }
}



// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
{/* <label for="first_name">First Name</label>
<input type="text" id="first_name" name="firstname" />

<label for="last_name">Last Name</label>
<input type="text" id="last_name" name="lastname" /> */}


document.addEventListener('DOMContentLoaded', function () {
    var firstNameInput = document.getElementById('first_name');

    firstNameInput.addEventListener('input', function () {
        if (firstNameInput.value.toLowerCase() === 'john') {
            document.getElementById('last_name').value = 'Doe';
        }
    });
});



// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.

document.addEventListener('DOMContentLoaded', function (){
    
});

// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
function checkPassword() {
    let password1 = document.getElementById("password").value
    let password2 = document.getElementById("confirm-password").value
    let alertText = document.getElementById("password-alert");

    if (password1 === password2) {
        alertText.textContent = "Password Matches"
    } else {
        alertText.textContent = "Password does not match"
    }
}
document.getElementById('password1').addEventListener('input', checkPassword);
document.getElementById('password2').addEventListener('input', checkPassword);



//Question 6

document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById("radio-reset-button");
    button.addEventListener('click', function(){
      document.getElementById("week_tue").checked = false;
      document.getElementById("week_wed").checked = false;
      document.getElementById("week_thu").checked = false;
    });
});



//Question 7 





//Question 8





//Question 9 

