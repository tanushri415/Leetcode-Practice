// create hello world function : Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = function () {
    return function () {
        return "Hello World";
    };
};