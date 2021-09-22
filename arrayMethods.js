const fruits = ['kiwi', 'lime', 'banana', 'orange', 'grapes', 'apple']

function getNextFruit() {
    const nextFruit = fruits.shift(0)
    console.log('You get a', nextFruit)
    console.log('There are', fruits.length, 'fruits left')
}

const numLoops = fruits.length
for(let i = 0; i < numLoops; i++) {
    getNextFruit()
}
