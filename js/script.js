//Generare l'array random di bombe

let bombArray = [];

while(bombArray.length < 16){
    let bombNumber = Math.floor(Math.random() * 100) + 1;
    if (!bombArray.includes(bombNumber)){
        bombArray.push(bombNumber);
    } 
}

console.table(bombArray);