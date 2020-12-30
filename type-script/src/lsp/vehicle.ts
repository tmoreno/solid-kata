export abstract class Vehicle {

    private engineStarted: boolean = false;

    startEngine(): void {
        this.engineStarted = true;
    }

    engineIsStarted(): boolean {
        return this.engineStarted;
    }

    stopEngine(): void {
        this.engineStarted = false;
    }

    abstract fillUpWithFuel(): void;

    abstract chargeBattery(): void;
}
