import { Dog } from '../../src/isp/dog';
    
test('run', () => {
    console.log = jest.fn();

    const dog = new Dog();

    dog.run();

    expect(console.log).toHaveBeenCalledWith("Dog is running");
});

test('bark', () => {
    console.log = jest.fn();

    const dog = new Dog();

    dog.bark();
    
    expect(console.log).toHaveBeenCalledWith("Dog is barking");
});
