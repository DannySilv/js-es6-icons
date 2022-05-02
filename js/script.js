// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// BONUS
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
];

// MILESTONE 1+2 (FUNCTION "CARD-GENERATOR" DONE AFTER THIS, THAT CAN BE USED AS WELL INSTEAD OF THIS)
const iconContainer = document.getElementById("icon-container")

icons.forEach((element) => {
	iconContainer.innerHTML += 
	`<div class="col-lg-3 col-md-4 col-sm-6 text-center pt-2">
		<button type="button" class="btn btn-outline-light">
			<i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>
			<h5>${element.name.substring(0).toUpperCase()}</h5>
		</button>
	</div>`
})

// BONUS
const type = document.getElementById("type");

type.addEventListener("click", function() {
	iconContainer.innerHTML = ''

	if (type.value == "animal") {
		const animals = icons.filter((element) => {
			if (element.type == "animal") {
				return true;
			}
		});
		genCard(animals);
	} else if (type.value == "vegetable") {
		const vegetables = icons.filter((element) => {
			if (element.type == "vegetable") {
				return true;
			}
		});
		genCard(vegetables);
	} else if (type.value == "user") {
		const users = icons.filter((element) => {
			if (element.type == "user") {
				return true;
			}
		});
		genCard(users);
	} else if (type.value == "all") {
		genCard(icons);
	}
})

// FUNCTION - ICON CARD GENERATOR
/**
 * Description -> It creates the HTML element for the icon card
 * @param {any} array -> The array for which we are creating cards
 * @returns {any}
 */
function genCard(array) {
	const iconContainer = document.getElementById("icon-container")

	array.forEach((element) => {
		iconContainer.innerHTML += 
		`<div class="col-lg-3 col-md-4 col-sm-6 text-center pt-2">
			<button type="button" class="btn btn-outline-light">
				<i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>
				<h5>${element.name.substring(0).toUpperCase()}</h5>
			</button>
		</div>`
	})
}