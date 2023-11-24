const drinks = [
  { name: 'Hugo', price: 5, isCocktail: true },
  { name: 'Martini', price: 7, isCocktail: true },
  { name: 'Margarita', price: 7, isCocktail: true },
  { name: 'Manhattan', price: 9, isCocktail: true },
  { name: 'Earl Grey tea', price: 2, isCocktail: false },
  { name: 'Herbal tea', price: 2, isCocktail: false },
  { name: 'Ginger ale', price: 3, isCocktail: false },
  { name: 'Lemonade', price: 3, isCocktail: false },
];

const random = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const randomColor = () => {
  const red = random(255);
  const green = random(255);
  const blue = random(255);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
};

drinks.forEach((drink) => {
  const menuDrinks = document.querySelector('.container');
  const colorButton = randomColor();

  buttonDrinks = document.createElement('button');
  buttonDrinks.classList.add('buttonDrinks');
  buttonDrinks.textContent = `${drink.name} €${drink.price}`;
  buttonDrinks.style.backgroundColor = colorButton;

  buttonDrinks.addEventListener('click', () => {
    if (drink.isCocktail === true) {
      console.log('a cocktail');
    } else {
      console.log('not a cocktail');
    }
  });

  menuDrinks.appendChild(buttonDrinks);
});

//DONE: List of not cocktails and cocktails
//DONE: Generate buttons, for each one with a different color. They all represent a drink.
//DONE: Each button other color
//DONE: button with console log
//TODO: make each drink in array a type
//TODO: function when clicked on soft drink
//TODO: Function that displays content for making tea
//TODO: Function when clicking on a cocktail, a picture should appear
//TODO: make a API request
//TODO: Main Event listener function -> so when button is clicked prepare content based on type of drink
