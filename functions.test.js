const {
    returnTwo, 
    greeting, 
    add
} = require('./functions.js')

test('test returnTwo', () => {
    expect(returnTwo()).toEqual(2)
})

test('test greeting', () => {
    expect(greeting('James')).toEqual("Hello, James.")
    expect(greeting('Jill')).toEqual("Hello, Jill.")
})

test('test add', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
})