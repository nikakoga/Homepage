alert('Hejka okruszku !😊') //alert który wyskoczy na stronie

console.log('No heeej widze, że ktoś tu szpera 😎')
const my_name = 'Nika';
let age = 22; //sposob deklaracji zmiennej, moge ja potem nadpisywac, przeciwienstwo const
console.log(`My name is ${my_name} and I'm ${age} years old`);
let bye = "No to hejkaaa 🚀";
console.log(bye);

const newFragment = document.querySelector('.mainPage__Paragraph--JS');
console.log(newFragment);
newFragment.innerHTML = "Fragment dodany z JS";
//inner HTML wyswietla tekst ktory sie tam znajduje


//heading.innerHTML = 'POZDRO JS';      //TAK MOZNA MODYFIKOWAC TRESC
//heading.innerHTML = '<strong>POZDRO</strong> JS'   //mozna nawet tak

//const paragraph = document.querySelectorAll('p');
//console.log(paragraph);     //tutaj dostajemy node list mozna tez sie odwolac po indeksie
//console.log(paragraph[0]);