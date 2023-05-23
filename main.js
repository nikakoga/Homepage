alert('Hejka okruszku !😊') //alert który wyskoczy na stronie

console.log('No heeej widze, że ktoś tu szpera 😎')
const my_name = 'Nika';
let age = 22; //sposob deklaracji zmiennej, moge ja potem nadpisywac, przeciwienstwo const
console.log(`My name is ${my_name} and I'm ${age} years old`);
let bye = "No to hejkaaa 🚀";
console.log(bye);

const heading = document.querySelector('.mainHeader');
console.log(heading.innerHTML);
//inner HTML wyswietla tekst ktory sie tam znajduje


//heading.innerHTML = 'POZDRO JS';      //TAK MOZNA MODYFIKOWAC TRESC
//heading.innerHTML = '<strong>pozdro</strong> JS'   //mozna nawet tak

const paragraph = document.querySelectorAll('p');
console.log(paragraph);
//tutaj dostajemy node list mozna tez sie odwolac po indeksie
console.log(paragraph[0]);