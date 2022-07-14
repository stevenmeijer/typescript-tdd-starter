export function greet() {
  console.log("hello world");
}

export function add(numbers: string): number {
  const numberList = numbers.split(",");

  if (numberList.length > 0) {
    return numberList.reduce((total, car) => total + Number(car), 0)
  }

  return 0
}
