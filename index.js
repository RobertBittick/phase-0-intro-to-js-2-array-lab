const cats = ['Milo','Otis','Garfield']

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
})

function destructivelyAppendCat(){
    cats.push('Ralph')
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
})

 function destructivelyPrependCat(){
    cats.unshift('Bob')
 }

 beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
})

function destructivelyRemoveLastCat(){
    cats.pop('Garfield')
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
})

function destructivelyRemoveFirstCat(){
    cats.shift('Milo')
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
})

function appendCat(){
    const newArray = [...cats,'Broom']
    return newArray
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
})

function prependCat(){
    const newArray = ['Arnold',...cats]
    return newArray
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
})

function removeLastCat(){
    const newArray = cats.slice(0,2)
    return newArray
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
})

function removeFirstCat(){
    const newArray = cats.slice(1)
    return newArray
}