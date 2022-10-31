const {
    returnTwo,
    greeting,
    add,
} = require('./functions.js')

//another way to require function.js (using for multiply, divide, and subtract functions)
const challenge = require('./functions')



test('test returnTwo', () => {
    expect(returnTwo()).toEqual(2)
})

test('test greeting', () => {
    expect(greeting('James')).toEqual("Hello, James.")
    expect(greeting('Jill')).toEqual("Hello, Jill.")
})


//use Describe
describe('Math functions', () => {
    test('test add', () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)
    })

    test('test multiply', () => {
        expect(challenge.multiply(3, 4)).toEqual(12)
        expect(challenge.multiply(6, 10)).toEqual(60)
    })

    test('test divide', () => {
        expect(challenge.divide(9, 3)).toEqual(3)
        expect(challenge.divide(6, 3)).toEqual(2)
    })

    test('test subtract', () => {
        expect(challenge.subtract(3, 4)).toEqual(-1)
        expect(challenge.subtract(10, 6)).toEqual(4)
    })
})


//check data types
test('test data type of subtract', () => {
    expect(typeof challenge.subtract()).toBe('number')
})