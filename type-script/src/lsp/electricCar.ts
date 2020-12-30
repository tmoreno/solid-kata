import { Vehicle } from './vehicle';

export class ElectricCar extends Vehicle {
    private static readonly BATTERY_FULL = 100;
    private _batteryLevel: number;

    fillUpWithFuel(): void {
        throw new Error("It's an electric car");
    }

    chargeBattery(): void {
        this._batteryLevel = ElectricCar.BATTERY_FULL;
    }

    batteryLevel(): number {
        return this._batteryLevel;
    }
}
