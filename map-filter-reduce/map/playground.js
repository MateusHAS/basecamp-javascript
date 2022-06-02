const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArq){
    return arr.map(function(item){
       return item * this.value;
    }, thisArq);
}

const nums = [1, 2];

console.log('this -> maçã' , mapComThis(nums, maca));

console.log('this -> laranja' , mapComThis(nums, laranja));