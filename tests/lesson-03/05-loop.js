// 1) Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Tong 1..100 =", sum);

// 2) In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 3) Tạo mảng chứa các số lẻ từ 1 đến 99
const oddNumbers = [];
for (let i = 1; i <= 99; i += 2) {
  oddNumbers.push(i);
}
console.log("Odd numbers:", oddNumbers);

// 4) In 10 email dựa vào số thứ tự
for (let i = 1; i <= 10; i++) {
  console.log(`user${i}@example.com`);
}

// 5) Tính tổng doanh thu 12 tháng
const monthlyRevenue = [
  { month: 1, total: 100 },
  { month: 2, total: 120 },
  { month: 3, total: 90 },
  { month: 4, total: 150 },
  { month: 5, total: 130 },
  { month: 6, total: 110 },
  { month: 7, total: 160 },
  { month: 8, total: 140 },
  { month: 9, total: 170 },
  { month: 10, total: 180 },
  { month: 11, total: 200 },
  { month: 12, total: 210 },
];

let totalRevenue = 0;
for (const item of monthlyRevenue) {
  totalRevenue += item.total;
}
console.log("Tong doanh thu nam =", totalRevenue);

