"use strict"

function buildCoffee(coffee) {
    let coffeeDiv = document.createElement('div')
    coffeeDiv.setAttribute("class", "coffee-div")
    coffeeDiv.setAttribute("class", "col-xs-12")
    coffeeDiv.innerHTML =
        `<div> ${coffee.id} </div>
            <div> ${coffee.name} </div>
            <div>${coffee.roast} </div>`;
    return coffeeDiv;
}

function renderCoffees(coffees) {
    tbody.replaceChildren();
    for (var i = coffees.length - 1; i >= 0; i--) {
        tbody.appendChild(buildCoffee(coffees[i]));
    }
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = e.target.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        if (coffee.name.toUpperCase().includes(selectedName.toUpperCase())) {
            filteredCoffees.push(coffee);
        }
    });
    renderCoffees(filteredCoffees);
}

function addCoffee(e) {
    e.preventDefault();

    let newCoffeeRoast = roastSelection.value;
    let newCoffeeName = e.target.value;
    // let emptyNewCoffee = {};
    // newCoffee.setAttribute('roast')
    // coffees.push(newCoffee);
    let newCoffee = {
        id: coffees.length,
        name: newCoffeeName,
        roast: newCoffeeRoast
    }

    // if (coffees.roast.toUpperCase().includes(newCoffeeRoast)) {
    //     coffees.push(newCoffee);
    // } else {
    //     (coffees.name.toUpperCase().includes(newCoffeeRoast.toUpperCase()))
    //     {
    //         coffees.pop();
    //     }
    //}

}

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
var submitButton = document.querySelector('#search-coffee-btn');
var roastSelection = document.querySelector('#roast-selection');
var addingCoffee = document.querySelector('#add-coffee-btn')

var coffeeSearch = document.querySelector("#search-coffee");
renderCoffees(coffees.reverse());

submitButton.addEventListener('click', updateCoffees);
coffeeSearch.addEventListener("input", updateCoffees);
addingCoffee.addEventListener('click', addCoffee);