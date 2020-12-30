import { Bird } from '../../src/isp/bird';
    
test('run', () => {
    console.log = jest.fn();

    const bird = new Bird();

    bird.run();

    expect(console.log).toHaveBeenCalledWith("Bird is running");
});

test('fly', () => {
    console.log = jest.fn();

    const bird = new Bird();

    bird.fly();
    
    expect(console.log).toHaveBeenCalledWith("Bird is flying");
});
