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
    console.log('button clicked!');
  });

  menuDrinks.appendChild(buttonDrinks);
});

//DONE: List of not cocktails and cocktails
//DONE: Generate buttons, for each one with a different color. They all represent a drink.
//DONE: Each button other color
