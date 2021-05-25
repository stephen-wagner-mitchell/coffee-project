"use strict"

function buildCoffee(coffee) {
    let coffeeDiv = document.createElement('div')
    coffeeDiv.innerHTML =
           `<div> ${coffee.id} </div>
            <div> ${coffee.name} </div>
            <div>${coffee.roast} </div>`;
    return coffeeDiv;
}

function renderCoffees(coffees) {
    for (var i = coffees.length - 1; i >= 0; i--) {
        tbody.appendChild(buildCoffee(coffees[i]));
    }
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            console.log(coffee)
        }
    });
    renderCoffees(filteredCoffees);
    console.log(filteredCoffees)
}
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var selectedName = nameFilter.value;
//     var filteredCoffees = [];
//     coffees.forEach(function (coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//         if (coffee.name === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     renderCoffees(filteredCoffees);
// }


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

renderCoffees(coffees.reverse());

submitButton.addEventListener('click', updateCoffees);
