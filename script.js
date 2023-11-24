const drinks = [
  { name: 'Hugo', price: 5 },
  { name: 'Martini', price: 7 },
  { name: 'Margarita', price: 7 },
  { name: 'Manhattan', price: 9 },
  { name: 'Earl Grey tea', price: 2 },
  { name: 'Herbal tea', price: 2 },
  { name: 'Ginger ale', price: 3 },
  { name: 'Lemonade', price: 3 },
];

drinks.forEach((drink) => {
  const menuDrinks = document.querySelector('.container');

  buttonDrinks = document.createElement('button');
  buttonDrinks.textContent = `${drink.name} €${drink.price}`;

  menuDrinks.appendChild(buttonDrinks);
});

//TODO: List of not cocktails and cocktails
//TODO: Generate buttons, for each one with a different color. They all represent a drink.
