
for(let i=0;i<5;i++){
    console.log(i)
 }

let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)];


btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        output.innerHTML = `Well done, your number was ${number}`
    } else if (input < number){
        output.innerHTML = "Too low!"
    };
    if (input > number){
        output.innerHTML = "Too high!"
    };
});

