import { add, greet } from './greeter';

describe("greet", () => {
  it("should greet the world", () => {
    // Arrange
    jest.spyOn(console, "log");

    // Act
    greet();

    // Assert
    expect(console.log).toHaveBeenCalledWith("hello world");
  });
});

describe("add", () => {
  it('should return 0 for empty string', function () {
    const total = add("");
    expect(total).toStrictEqual(0);
  });

  it('should return n for input n', function () {
    const total = add("5");
    expect(total).toStrictEqual(5);
  });

  it('should return sum of two numbers', function () {
    const total = add("1,2");
    expect(total).toStrictEqual(3);
  });

  it('should return sum of three numbers', function () {
    const total = add("1,2,3");
    expect(total).toStrictEqual(6);
  });

  it('should allow newline delimiters', function () {
    const total = add("1\n2,3");
    expect(total).toStrictEqual(6);
  });
})
