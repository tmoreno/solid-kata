import { Animal } from './animal';

export class Dog implements Animal {
    fly(): void {

    }

    run(): void {
        console.log("Dog is running");
    }

    bark(): void {
        console.log("Dog is barking");
    }
}
