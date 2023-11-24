const drinks = [
  { name: 'Hugo', price: 5, isCocktail: true, type: 'cocktail' },
  { name: 'Martini', price: 7, isCocktail: true, type: 'cocktail' },
  { name: 'Margarita', price: 7, isCocktail: true, type: 'cocktail' },
  { name: 'Manhattan', price: 9, isCocktail: true, type: 'cocktail' },
  { name: 'Earl Grey tea', price: 2, isCocktail: false, type: 'tea' },
  { name: 'Herbal tea', price: 2, isCocktail: false, type: 'tea' },
  { name: 'Ginger ale', price: 3, isCocktail: false, type: 'soft drink' },
  { name: 'Lemonade', price: 3, isCocktail: false, type: 'soft drink' },
];

const displayTeaContent = (drink) => {
  drink.type = 'tea';

  const steps = [
    'Put the kettle on',
    'Get a teaspoon of tea in your cup',
    'Pour the water and wait for a couple of minutes',
    'Enjoy the perfect tea!',
  ];

  const contentList = document.createElement('ol');
  steps.forEach((step) => {
    const listItem = document.createElement('li');
    listItem.textContent = step;
    contentList.append(listItem);
  });

  updateContent(contentList);
};

const displaySoftDrinksContent = (drink) => {
  drink.type = 'soft drink';

  const softDrinkContent = document.createElement('p');
  softDrinkContent.textContent = "Just pour the drink, and you're ready to go!";

  updateContent(softDrinkContent);
};

const updateContent = (content) => {
  const targetDiv = document.getElementById('softDrinkContent');

  targetDiv.innerHTML = '';
  targetDiv.appendChild(content);
};

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

  buttonDrinks.addEventListener('click', () => {
    if (drink.type === 'soft drink') {
      displaySoftDrinksContent(drink);
    } else if (drink.type === 'tea') {
      displayTeaContent(drink);
    }
  });

  menuDrinks.appendChild(buttonDrinks);
});

//DONE: List of not cocktails and cocktails
//DONE: Generate buttons, for each one with a different color. They all represent a drink.
//DONE: Each button other color
//DONE: button with console log
//DONE: make each drink in array a type
//DONE: function when clicked on soft drink
//DONE: Function that displays content for making tea
//TODO: Function when clicking on a cocktail, a picture should appear
//TODO: make a API request
//TODO: Main Event listener function -> so when button is clicked prepare content based on type of drink
