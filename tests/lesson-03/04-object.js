// 1) car
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log("Car year:", car.year);

// 2) person có address lồng nhau
const person = {
  name: "Nguyen Van A",
  address: {
    street: "Le Loi",
    city: "Ho Chi Minh",
    country: "Viet Nam",
  },
};
console.log("Street:", person.address.street);

// 3) student và truy cập điểm môn math
const student = {
  name: "Nam",
  grades: {
    math: 9,
    english: 8,
  },
};
console.log("Math score:", student.grades.math);

// 4) settings và thay đổi volume
const settings = {
  volume: 50,
  brightness: 70,
};
settings.volume = 80;
console.log("New settings:", settings);

// 5) bike và thêm color
const bike = {
  brand: "Giant",
};
bike.color = "black";
console.log("Bike:", bike);

// 6) employee và xóa thuộc tính age
const employee = {
  name: "Le Van C",
  age: 30,
  department: "HR",
};
delete employee.age;
console.log(employee);

// 7) school có class là thuộc tính, giá trị là mảng tên học sinh
const school = {
  classA: ["An", "Binh", "Chau"],
  classB: ["Dao", "Huong", "Giang"],
};
console.log("School:", school);

