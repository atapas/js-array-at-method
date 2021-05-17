
import "array.prototype.at/auto";

const junkFoodILove = ['🥖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🍿'];

const inputElement = document.getElementById('index-id');

function makeJunkieList() {
    const ul = document.getElementById('listJunkies');
    junkFoodILove.forEach((junk) =>{
        console.log(junk);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = junk;
    });

    inputElement.placeholder=`Between -${junkFoodILove.length} to ${junkFoodILove.length - 1}`
}

function findAt(index) {
    console.log(`Find At ${index}`);
    const result = Number.isNaN(index) ? '' : junkFoodILove.at(index);
    document.getElementById('output').innerHTML = result;
}

inputElement.addEventListener('keyup', function(e) {
    const index = e.target.valueAsNumber;
    findAt(index);
});

inputElement.addEventListener('change', function(e) {
    const index = e.target.valueAsNumber;
    findAt(index);
});

makeJunkieList();