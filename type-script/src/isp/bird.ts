import { Animal } from './animal';

export class Bird implements Animal {
    bark(): void {

    }

    run(): void {
        console.log("Bird is running");
    }

    fly(): void {
        console.log("Bird is flying");
    }
}