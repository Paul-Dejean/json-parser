describe("stringify", () => {
  test("should be able to stringify an empty object", () => {
    const obj = {};
    expect(JSON.stringify(obj)).toBe("{}");
  });

  test("should be able to stringify a non-empty object", () => {
    const obj = { key: "value" };
    expect(JSON.stringify(obj)).toBe('{"key":"value"}');
  });

  test("should be able to stringify an array", () => {
    const arr = [1, 2, 3];
    expect(JSON.stringify(arr)).toBe("[1,2,3]");
  });

  test("should be able to stringify a string", () => {
    const str = "hello";
    expect(JSON.stringify(str)).toBe('"hello"');
  });

  test("should be able to stringify a number", () => {
    const num = 42;
    expect(JSON.stringify(num)).toBe("42");
  });

  test("should be able to stringify a boolean", () => {
    const bool = true;
    expect(JSON.stringify(bool)).toBe("true");
  });

  test("should be able to stringify null", () => {
    const n = null;
    expect(JSON.stringify(n)).toBe("null");
  });

  test("should be able to stringify nested objects", () => {
    const obj = { nested: { key: "value" } };
    expect(JSON.stringify(obj)).toBe('{"nested":{"key":"value"}}');
  });

  test("should be able to stringify an object with an array", () => {
    const obj = { arr: [1, 2, 3] };
    expect(JSON.stringify(obj)).toBe('{"arr":[1,2,3]}');
  });

  test("should strip undefined values in objects", () => {
    const obj = { key: undefined, key2: "value" };
    expect(JSON.stringify(obj)).toBe('{"key2":"value"}');
  });

  test("should replace undefined by null in arrays", () => {
    const arr = [undefined, "value"];
    expect(JSON.stringify(arr)).toBe('[null,"value"]');
  });

  test("should be able to stringify a complex object", () => {
    const obj = {
      user: { name: "John", age: 20 },
      isAdmin: true,
      email: null,
      roles: ["admin", "user", undefined],
      metadata: { lastConnection: null, firstConnection: undefined },
    };
    expect(JSON.stringify(obj)).toBe(
      '{"user":{"name":"John","age":20},"isAdmin":true,"email":null,"roles":["admin","user",null],"metadata":{"lastConnection":null}}',
    );
  });

  test("should throw an error on circular references", () => {
    const obj: Record<string, unknown> = {};
    obj.obj = obj;
    expect(() => JSON.stringify(obj)).toThrow();
  });
});
