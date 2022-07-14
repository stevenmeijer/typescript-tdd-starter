export function greet() {
  console.log("hello world");
}

export function add(numbers: string): number {
  const numberList = numbers.split(",");
  if (numberList.length === 1) {
    return Number(numberList[0]);
  } else if (numberList.length === 2) {
    return Number(numberList[0]) + Number(numberList[1]);
  } else {
    return 0
  }
}
