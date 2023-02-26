'use strict';   

    let throwCount;
    let randomValue = random();

    function random(min,max) {
        return min + Math.random() * (max - min);
    }
    
    throwCount = +prompt("Скільки разів ви хочете кинути шестигранний кубик?");

    for (let i = 0; i < throwCount; i++) {
        const result = random(1, 6);
        
        alert(random(1, 6).toFixed(0));
        alert(random(1, 6).toFixed(0));

        console.log(result.toFixed(0));
    }