function sample1() {
  // 型
  type GoodPerson = {
    name: string;
    age: number;
    email?: string;
  };

  const person: GoodPerson = {
    name: "Jhon Doe",
    age: 30,
  };

  // unknown
  const myarr: Array<boolean> = [true, false];

  const myval: unknown = "hoge";
  if (typeof myval === "string") {
    //console.log(myval.length);
  }

  // タプル
  type GoodProduct = [name: string, price: number, isStock: boolean];
  const product: GoodProduct = ["PS5", 79800, false];
  //console.log(product);

  // enum
  enum Direction {
    Up = "↑",
    Dwon = "↓",
    Left = "←",
    Right = "→",
  }

  enum Role {
    Admin,
    User,
    Guest,
  }

  function move(direction: Direction) {
    //console.log(direction);
  }
  //move(Direction.Up);

  // interface type
  interface Animal {
    name: string;
    age: number;
    makeSound: () => void;
  }
  const dog: Animal = {
    name: "taro",
    age: 3,
    makeSound: () => console.log("Woof!"),
  };
  //console.log(dog);

  type Car = {
    model: string;
    year: number;
  };
  const myCar: Car = {
    model: "new",
    year: 2023,
  };
  //console.log(myCar);

  interface Rectangle {
    width: number;
    height: number;
    getArea: () => number;
  }
  interface Square extends Rectangle {
    sideLength: number;
  }

  // 交差型
  interface Address {
    street: string;
    city: string;
    zipCode: string;
  }
  interface ContractInfo {
    email: string;
    phone: string;
  }
  type Person = {
    name: string;
    age: number;
  };
  type Employee = Person & Address & ContractInfo;
  interface Product {
    id: number;
    name: string;
    price: number;
  }
  interface Discountable {
    discountPercentage: number;
    applyDiscount: (price: number) => number;
  }
  type DiscountProduct = Product & Discountable;

  const myEmployee: Employee = {
    street: "meguro",
    city: "tokyo",
    zipCode: "123-0001",
    email: "hoge@example.com",
    phone: "0120-444-444",
    name: "taro",
    age: 29,
  };
  const myProduct: DiscountProduct = {
    id: 1,
    name: "PS5",
    price: 79800,
    discountPercentage: 15,
    applyDiscount: function (this: DiscountProduct, price: number): number {
      return (price * this.discountPercentage) / 100;
    },
  };

  console.log(myEmployee);
  console.log(myProduct);
}

export default sample1;
