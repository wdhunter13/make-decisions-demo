/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let kenobiAttack = 25;
let skywalkerAttack = 35;

if (kenobiAttack > skywalkerAttack) {
  console.log("Kenobi's attack is better.");
} else {
  console.log("Skywalker has the better attack");
}

let kenobiHealth = 100
let kenobiDefence = 0

if ( skywalkerAttack >= kenobiHealth){
    console.log('Kenobi was slain')
}else{
    kenobiHealth = kenobiHealth - skywalkerAttack
    console.log("Skywalker attacks! Kenobi's health is now", kenobiHealth)
}

kenobiDefence += 30

if ((kenobiHealth + 50) >= 100){
    kenobiHealth = 100
    console.log('R2 throws kenobi a medpack. Kenobi health is now', kenobiHealth)
}else{
    kenobiHealth += 50
}

for(let i = 0; i < 5; i++){
    kenobiHealth -= (skywalkerAttack - kenobiDefence)
    console.log(`Skywalker attacks and Kenobi's health is now ${kenobiHealth}`)
}

while(kenobiHealth > 0){
    kenobiHealth -= (skywalkerAttack - kenobiDefence)
    console.log(kenobiHealth)
    if(kenobiHealth <= 0){
        console.log('Kenobi has been slain')
    }
}
