//Objekto pavertimas į masyvą 

let objektas = { 
        parametras: 456, 
        parametras2: hello
    
    }; 
    
    // gausi [‘parametras’, ‘parametras2’] 
    let masyvas = Object.keys(objektas); 
    
    // gausi [456, ‘hello there :D’] 
    let masyvas2 = Object.values(objektas); 


// Objekto dalinis klonavimas  

let objektas = { 
    parametras: 456, 
    parametras2: hello

}; 

    // Galima keisti atskirai nuo originalaus objekto 
    let klonas1 = Object.assign({}, object); 

    // Galima keisti atskirai nuo originalaus objekto deka spread // operatoriaus
    let klonas2 = { ...object }; 