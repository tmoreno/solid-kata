# SOLID design principles

This repository contains examples that violate the SOLID principles, the objective is modify each of the examples in order to not violate the corresponding SOLID principle.

## Single Responsibility Principle
### Definition
- Every class should have a single responsibility. 
- A class should have one, and only one, reason to change.

### How to achieve
- Small clases with close objectives.

### Objective
- High cohesion and robustness.
- Allow class composition (inject collaborators).
- Avoid code duplication.

## Open/Closed Principle
### Definition
- You should be able to extend a classes behavior, without modifying it.
- Software entities should be open for extension, but closed for modification.
- This principle applies to: classes, services, microservices, use cases, ...

### How to achieve
- Avoiding depending on specific implementations, using abstract classes or interfaces.

### Objective
- Make it easy to add new use cases in our application.

## Liskov Substitution Principle
### Definition
- Derived classes must be substitutable for their base classes. 
- Functions that use references to base classes must be able to use objects of derived classes without knowing it.

### How to achieve
- The behavior of the subclasses must respect the contract established in the superclass.

### Objective
- Maintain functional correctness to be able to apply OCP.

## Interface Segregation Principle
### Definition
- Make fine grained interfaces that are client specific.
- Clients should not be forced to depend on interfaces they do not use.

### How to achieve
- Define interface contracts based on the clients that use them and not on the implementations that we could have (The interfaces belong to the clients).
- Avoid "Header Interfaces" by promoting "Role Interfaces".

### Objective
- High cohesion and low structural coupling.

## Dependency Inversion Principle
### Definition
- Depend on abstractions, not on concretions. 
- High-level modules should not depend on low-level modules. Both should depend on abstractions. 
- Abstractions should not depend on details. 
- Details should depend on abstractions.

### How to achieve
- Inject dependencies (constructor parameters).
- Rely on the interfaces (contracts) of these dependencies and not on specific implementations.
- LSP as a premise.

### Objective
- Facilitate modification and replacement of implementations.
- Better class testability.