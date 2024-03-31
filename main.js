"use strict";

/// Level 1 ///

class Animal {
  constructor(word) {
    this.word = word;
  }
  say() {
    return this.word;
  }
}

const dog = new Animal("Guv");
console.log("dog:", dog.say());
const cat = new Animal("Meow");
console.log("cat:", cat.say());
const tiger = new Animal("Rrr");
console.log("tiger:", tiger.say());

// ------------------------------task-2------------------------------- //

class Car {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }
  ride() {
    console.log(`${this.model} going at a speed of ${this.speed}km/h!`);
  }
  stop(valueOfSpeed) {
    // this.speed = 0
    console.log(`${this.model} stopped. Speed is ${valueOfSpeed}km/h`);
  }
  gase(valueOfSpeed) {
    // this.speed += 10
    valueOfSpeed = this.speed + valueOfSpeed;
    console.log(`${this.model} going at a speed of ${valueOfSpeed}km/h!`);
  }
  break(valueOfSpeed) {
    // this.speed -= 10
    valueOfSpeed = this.speed - valueOfSpeed;
    console.log(`${this.model} going at a speed of ${valueOfSpeed}km/h!`);
  }
}

const audi = new Car("Audi", 120);
audi.ride();
audi.stop(0);
audi.gase(10);
audi.break(10);

// ------------------------------task-3------------------------------- //

class TodoList {
  constructor() {
    this.todos = [];
  }
  show() {
    this.todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  addTask(task) {
    this.todos.push(task);
    this.show();
  }
  removeTask(task) {
    this.todos = this.todos.filter((item) => {
      return item !== task;
    });
    this.show();
  }
}
const todoList = new TodoList();
todoList.addTask("Go to the grocery shop");
todoList.addTask("Make a homework");
todoList.addTask("Go to the gym");
todoList.removeTask("Go to the grocery shop");

// todoList.#show();

/// Level 2 ///

class Vehicle {
  constructor(speed) {
    this.speed = speed;
  }
  ride(vehicle) {
    console.log(`${vehicle} Going at a speed ${this.speed}km/h`);
  }
  stop() {
    this.speed = 0;
    console.log(`Stopped. Speed is ${this.speed}km/h`);
  }
}
// const auto = new Vehicle(120);
// auto.ride();
// auto.stop();

class Bicycle extends Vehicle {
  constructor(type, speed) {
    super(speed);
    this.type = type;
  }
  ride(vehicle) {
    super.ride("Audi");
    console.log(`${vehicle} goes at high speed`);
  }
}

const bicycle = new Bicycle("Bike", 20);
const car = new Bicycle("Audi", 170);

bicycle.ride("Bicycle");
bicycle.stop();

car.ride("Audi");
car.stop();

class Ambulance extends Vehicle {
  constructor(color, speed) {
    super(speed);
    this.color = color;
  }
  vehicle(vehicle) {
    super.ride(vehicle);
    console.log(`${vehicle} color is ${this.color}`);
  }
}

const ambulance = new Ambulance("White", 85);
const plane = new Ambulance("Black", 850);

ambulance.vehicle("Ambulance");
ambulance.stop();

plane.vehicle("Plane");
plane.stop();

// ------------------------------task-3------------------------------- //

class Customer {
  constructor(name) {
    this.name = name;
    this.shoppingCard = [];
    this.sum = 0;
  }
  addProduct(product) {
    this.shoppingCard.push(product);
    if (product instanceof DiscountProduct) {
      this.sum += product.calculateDiscountPrice();
    } else {
      this.sum += product.price;
    }
  }
  removeProduct(product) {
    this.shoppingCard = this.shoppingCard.filter((item) => {
      return product !== item;
    });
    if (product instanceof DiscountProduct) {
      this.sum -= product.calculateDiscountPrice();
    } else {
      this.sum -= product.price;
    }
  }
  buy() {
    const products = this.shoppingCard.map((item) => item.title).join(", ");
    console.log(
      `${this.name} bought goods ${products} for the sum of ${this.sum.toFixed(
        2
      )} USD.`
    );
    this.shoppingCart = [];
    this.sum = 0;
  }
}

class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

class DiscountProduct extends Product {
  constructor(title, price, discountPercent) {
    super(title, price);
    this.discountPercent = discountPercent;
  }
  calculateDiscountPrice() {
    const valueOfDiscount = (this.price * this.discountPercent) / 100;
    return this.price - valueOfDiscount;
  }
}

const tv = new Product("TV", 500);
const soundSystem = new Product("Sound system", 600);
const phone = new DiscountProduct("IPhone 15 Pro Max", 1399, 30);

const customer = new Customer("Tony Stark");

customer.addProduct(tv);
customer.addProduct(soundSystem);
customer.addProduct(phone);
customer.removeProduct(tv);
customer.buy();
