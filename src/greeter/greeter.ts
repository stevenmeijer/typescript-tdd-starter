export function greet() {
  console.log("hello world");
}

export function add(numbers: string): number {
  return numbers ? +numbers : 0;
}
