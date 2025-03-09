import parseJSON from "../src";

describe("JSON parser", () => {
  test("should be able to parse empty json object", () => {
    const text = "{}";
    expect(parseJSON(text)).toEqual({});
  });

  test("should throw an error if json text is empty", () => {
    const text = "";
    expect(() => parseJSON(text)).toThrow();
  });

  test("should thow an error if json object is invalid", () => {
    const text = "{";
    expect(() => parseJSON(text)).toThrow();
  });

  test("should be able to parse json object with key value pair where value is a string", () => {
    const text = `{"name": "John"}`;
    expect(parseJSON(text)).toEqual({ name: "John" });
  });

  test("should be able to parse json object with mutiple key value pairs where values are a string", () => {
    const text = `{"firstname": "John", "lastname": "Doe"}`;
    expect(parseJSON(text)).toEqual({ firstname: "John", lastname: "Doe" });
  });

  test("should throw an error if json object has a key without a value", () => {
    const text = `{"name":}`;
    expect(() => parseJSON(text)).toThrow();
  });

  test("should throw an error if json object has a value without a key", () => {
    const text = `{:"John"}`;
    expect(() => parseJSON(text)).toThrow();
  });

  test("should throw an error if json object is malformed", () => {
    const text = `{"name: "John"}`;
    expect(() => parseJSON(text)).toThrow();
  });

  test("should parse object even if there are spaces in the text", () => {
    const text = `{ "name":        "John" }`;
    expect(parseJSON(text)).toEqual({ name: "John" });
  });
});
