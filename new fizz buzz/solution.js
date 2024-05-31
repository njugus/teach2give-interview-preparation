const fizzBuzz = () => {
  for (num = 1; num <= 100; num++) {
    switch (true) {
      case num % 15 === 0:
        console.log(`${num} - FizzBuzz`);
        break;

      case num % 3 === 0:
        console.log(`${num} - Fizz`);
        break;

      case num % 5 === 0:
        console.log(`${num} - Buzz`);
        break;

      default:
        console.log(num);
        break;
    }
  }
};

fizzBuzz();
