//Riferimenti in HTML

const result = document.getElementById("result");

//Generare l'array random di bombe

let bombArray = [];

while(bombArray.length < 16){
    let bombNumber = Math.floor(Math.random() * 100) + 1;
    if (!bombArray.includes(bombNumber)){
        bombArray.push(bombNumber);
    } 
}

console.table(bombArray);

//Richiedere numeri all'utente e verificarli

let inputNumbers = [];

for(let i = 0; i < (100 - 16); i++){

    let inputNum = parseInt(prompt("Inserisci un numero da 1 a 100"));

    while (isNaN(inputNum) || inputNum < 1 || inputNum > 100){
        alert("Dati inseriti non validi")
        inputNum = parseInt(prompt("Inserisci un numero da 1 a 100"));
    }

    while (inputNumbers.includes(inputNum)){
        alert("Hai già inserito questo numero!")
        inputNum = parseInt(prompt("Inserisci un numero da 1 a 100"));
    }

    if(bombArray.includes(inputNum)){
        break;
    }else{
        inputNumbers.push(inputNum);
    }
}

console.table(inputNumbers);

if (inputNumbers.length === (100 - 16)){
    result.innerHTML = "Complimenti! Hai Vinto!"
}else{
    result.innerHTML = "Game Over <br> Il tuo punteggio è: " + inputNumbers.length;
}
