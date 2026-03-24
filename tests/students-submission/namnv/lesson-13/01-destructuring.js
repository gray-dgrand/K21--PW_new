// 1
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  occupation: "Software Engineer",
};
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age);

// 2
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "White",
};
const { brand, model, year, color } = car;
console.log(brand, model, year, color);

// 3
const user = {};
const { name = "Guest" } = user;
console.log(name);

// 4
const product = {};
const { price = 0 } = product;
console.log(price);

// 5
const book = { title: "Clean Code" };
const { title: bookTitle } = book;
console.log(bookTitle);

// 6
const movie = { director: "Christopher Nolan" };
const { director: filmDirector } = movie;
console.log(filmDirector);

// 7
const personWithAddress = {
  address: {
    street: "Le Loi",
    city: "Ho Chi Minh",
    country: "Viet Nam",
  },
};
const {
  address: { street },
} = personWithAddress;
console.log(street);

// 8
const productWithDetails = {
  details: {
    brand: "Apple",
    model: "iPhone 15",
    color: "Black",
  },
};
const {
  details: { model: productModel },
} = productWithDetails;
console.log(productModel);

