import { Vehicle } from '../../src/lsp/vehicle';

test('start engine', () => {
    const vehicle = new TestableVehicle();

    vehicle.startEngine();

    expect(vehicle.engineIsStarted()).toBeTruthy();
});

test('stop engine', () => {
    const vehicle = new TestableVehicle();

    vehicle.startEngine();
    vehicle.stopEngine();

    expect(vehicle.engineIsStarted()).toBeFalsy();
});


class TestableVehicle extends Vehicle{
    fillUpWithFuel(): void {

    }

    chargeBattery(): void {

    }
}
