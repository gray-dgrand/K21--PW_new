function findPairsDivisibleBy17() {
  let count = 0;

  for (let i = 1; i <= 100; i++) {
    for (let j = i + 1; j <= 100; j++) {
      if ((i + j) % 17 === 0) {
        console.log(`(${i}, ${j}) = ${i + j}`);
        count++;
      }
    }
  }

  console.log(`\nTong cong: ${count} cap`);
}

// Test
findPairsDivisibleBy17();

