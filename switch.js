const fruit = 'apple'

switch(fruit) {
    case 'lime':
    case 'kiwi':
        console.log(fruit, 'is green')
        break
    case 'orange':
        console.log(fruit, 'is orange')
        break
    case 'banana':
        console.log(fruit, 'is yellow')
        break
    case 'apple':
        console.log(fruit, 'is red')
        break
    default:
        console.log('I have no idea what that fruit looks like')
    }