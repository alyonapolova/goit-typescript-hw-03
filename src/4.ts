class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  comeIn(person: Person): void {
    if (
      this.door &&
      this.key.getSignature() === person.getKey().getSignature()
    ) {
      this.tenants.push(person);
      console.log("Person can come in house");
    } else {
      console.log("Person can't come in house");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("The door is open");
    } else {
      console.log("The door can't be open");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
